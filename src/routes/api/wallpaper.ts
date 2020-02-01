import { Router } from 'express';
import multer from 'multer';
import uuidv4 from 'uuid/v4';
import { APP_ROOT } from '../../..';
import { User, UserType } from '../../models/User';

const api = require("../../../build/Release/native.node");
const router = Router();
const storage_path = 'uploads/raw/';

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
        if (!token) {
            res.status(401).json({ error: "Unauthorized profile" });
            return;
        }
        if (!Array.isArray(req.files)) {
            res.status(400).json({ error: "Files should be of array type" });
            return;
        }
        const arr: Express.Multer.File[] = req.files;
        const output_file = `${APP_ROOT}/uploads/heic/${uuidv4()}.heic`
        const fnames = [output_file, ...arr.map((elem: Express.Multer.File) => `${APP_ROOT}/${storage_path}${elem.filename}`)];
        User.findOne({ googleId: token }, "Push new image to exist", (err, user: UserType) => {
            if (err)
                throw err;
            if (user.images) {
                user.images.push(output_file);
            }
            else {
                user.images = [output_file];
            }
            user.save();
        });
        api.createHeic(fnames);
        res.json({ files: output_file });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
})

export default router;
