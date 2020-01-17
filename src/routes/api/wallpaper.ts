import { Router } from 'express';

const api = require("../../../build/Release/native.node");
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/new', upload.array('wallpaper', 16), function (req, res, next) {
    try {
        if (!Array.isArray(req.files)) {
            res.status(400).json({ error: "Files should be array" });
            return;
        }
        const arr: Express.Multer.File[] = req.files;
        const output_file = `${__dirname}/uploads/${uuidv4()}.heic`
        const fnames = [output_file, ...arr.map((elem: Express.Multer.File) => `${__dirname}/${elem.filename}`)];
        res.json({ files: api.createHeic(fnames) });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
})

export default router;
