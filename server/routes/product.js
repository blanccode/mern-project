const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const multer = require('multer');
const { auth } = require("../middleware/auth");


//=================================
//            Product
//=================================

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png' || ext !== '.webp') {
            return cb(res.status(400).end('only jpg, png and webp are supported'), false)
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single('file')

router.get("/uploadImage", (req, res) => {
    res.json({ user: 'tobi' })
    res.end()
})
router.post("/uploadImage", (req, res) => {
    //    //saving to server after getting img from client
    //    res.send("post works--------")

    upload(req, res, err => {
        if (err) return res.json({ success: false, err })
        console.log(req.file)
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});
router.post("/uploadProduct", (req, res) => {
    //    //saving to server after getting formInputs from client
});


module.exports = router;
