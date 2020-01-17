import { Router } from 'express';
import { APP_ROOT } from '../../../index';

const api = require("../../../build/Release/native.node");
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const router = Router();
const storage_path = 'uploads/';
var storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: Function) {
        cb(null, storage_path)
    },
    filename: function (req: any, file: any, cb: Function) {
        cb(null, uuidv4() + '.jpg') //Appending .jpg
    }
});
var upload = multer({ storage: storage });

router.post('/new', upload.array('wallpaper', 16), function (req, res, next) {
    try {
        if (!Array.isArray(req.files)) {
            res.status(400).json({ error: "Files should be array" });
            return;
        }
        const arr: Express.Multer.File[] = req.files;
        const output_file = `${APP_ROOT}/uploads/${uuidv4()}.heic`
        const fnames = [output_file, ...arr.map((elem: Express.Multer.File) => `${APP_ROOT}/${storage_path}${elem.filename}`)];
        console.log("Start file creating ");
        res.json({ files: api.createHeic(fnames) });
        // res.send("okey");
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
})

export default router;