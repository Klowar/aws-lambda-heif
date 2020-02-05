import { Router } from 'express';
import multer from 'multer';
import uuidv4 from 'uuid/v4';
import { APP_ROOT } from '../../..';
import { tedispool } from '../../app';
import { User, UserType } from '../../models/User';

const api = require("../../../build/Release/native.node");
const router = Router();
const storage_path = 'uploads/raw/';
const CREATE_PAUSE_MINUTES = 5 * 60 * 1000;

var storage = multer.diskStorage({
    destination: function (req: Express.Request, file: Express.Multer.File, cb: Function) {
        cb(null, storage_path)
    },
    filename: function (req: Express.Request, file: Express.Multer.File, cb: Function) {
        cb(null, uuidv4() + '.jpg') //Appending .jpg
    }
});
var upload = multer({ storage: storage });

router.post('/new', upload.array('wallpaper', 16), function (req, res, next) {
    try {
        const token = req.cookies.token;
        // Replace with some validator (pipe?)
        if (!token) {
            res.status(401).json({ error: "Unauthorized profile" });
            return;
        }
        if (!Array.isArray(req.files)) {
            res.status(400).json({ error: "Files should be of array type" });
            return;
        }
        const arr: Express.Multer.File[] = req.files;
        const output_file = `${APP_ROOT}/uploads/heic/${uuidv4()}.heic`;
        let allowCreate = false;
        User.findOne({ googleId: token }, (err, user: UserType) => {
            if (err) {
                return;
            }
            if (user.createBarier && user.createBarier.getTime() > Date.now()) {
                return;
            }
            user.createBarier = new Date(Date.now() + CREATE_PAUSE_MINUTES);
            allowCreate = true;
            if (user.images) {
                user.images.push(output_file);
            }
            else {
                user.images = [output_file];
            }
            user.save();
        }).then((udoc: UserType) => {
            if (!allowCreate) {
                res.json({ state: "Create not available", nextCreateTime: udoc.createBarier });
                return
            }
            const fnames = [output_file, ...arr.map((elem: Express.Multer.File) => `${APP_ROOT}/${storage_path}${elem.filename}`)];

            tedispool.getTedis().then(async (tedis) => {
                await tedis.hset("create", uuidv4(), fnames.join(" "));
                tedispool.putTedis(tedis);
            });
            res.json({ state: "Queue", file: output_file, });
        });

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

export default router;
