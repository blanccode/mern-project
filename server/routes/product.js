const express = require('express');
const router = express.Router();
const multer = require('multer');
const { auth } = require("../middleware/auth");
const { Product } = require('../models/Product')


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

router.get("/", (req, res) => {
    res.json({ user: 'tobi' })
    res.end()
})
router.post("/uploadImage", (req, res) => {
    //    //saving to server after getting img from client
    //    res.send("post works--------")
    upload(req, res, err => {
        console.log(req.file)

        if (err) {
            console.log(err)
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});
router.post("/uploadProduct", (req, res) => {
    //    //saving to server after getting formInputs from client
    // console.log(req)
    const product = new Product(req.body)

    product.save((err) => {

        if (err) {
            console.log(err)
            return res.json({ success: false }).status(400)
        }
        return res.json({ success: true }).status(200)
    })
    // console.log(req.body)

    // try {
    //     const product =  new Product(req.body)
    //     await product.save()
    //     res.json({ success: true }).status(200)


    // } catch (error) {
    //     console.log(error)
    //     res.json({ success: false }).status(400)
    // }
});
router.get("/getProducts", async (req, res) => {

    try {
        const products = await Product.find()
        res.json({ success: true, products}).status(200)

    } catch (err) {
        console.log(err)
        res.json({ success: false }).status(400)

    }
});


module.exports = router;
