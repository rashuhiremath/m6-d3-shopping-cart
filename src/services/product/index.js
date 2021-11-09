import express from "express"
import Categoryproduct from "../../db/models/categoryProduct.js"
import models from "../../db/models/index.js"
const {Product,Review,Category}= models

import { CloudinaryStorage } from "multer-storage-cloudinary"
import { v2 as cloudinary } from "cloudinary"
import multer from "multer"


const router = express.Router()


const cloudinaryStorage = new CloudinaryStorage({
  cloudinary, // CREDENTIALS, this line of code is going to search in your process.env for something called CLOUDINARY_URL
  params: {
    folder: "Amazon",
  },
})

router.get("/",async(req,res,next)=>{
    try {

        const products = await Product.findAll({include:[{model:Category,
            through:{attributes:[]}},
            Review]})
        res.send(products)
        
    } catch (error) {
        console.log(error) 
        next(error)
    }

})

router.post("/",async(req,res,next)=>{
    try {

        const {categories,...rest} = req.body
        const product = await Product.create(rest)

        await Categoryproduct.create({
            categoryId:req.body.categoryId,
            productId:product.id,
        })
        res.send(product)
        
    } catch (error) {
        console.log(error) 
        next(error)
    }
})
router.post("/:id/uploadCloudinary", multer({ storage: cloudinaryStorage }).single("image"), async (req, res, next) => {
    try {
        const image = req.file.path
      console.log(req.file)
      const result = await Product.update({image},{
        where:{
            id:req.params.id
      },returning:true
        
        })
      res.send({result})
    } catch (error) {
      next(error)
    }
  })


router.post("/:id/categories", async(req,res,next)=>{
    try {
        const {categories}= req.body
        const newValues = categories.map((category) => ({
            categoryId: category,
            productId: req.params.productId,
          }));
        res.send(newValues )
    } catch (error) {
        console.log(error)
        next(error)
    }
})
// get by id
router.get("/:id",async(req,res,next)=>{
    try {
        const productById = await Product.findByPk(req.params.id,{include:Review})
        res.send(productById)
    } catch (error) {
        console.log(error) 
        next(error)
    }
})

router.put("/:id",async(req,res,next)=>{
    try {
        const newProduct = await Product.update({...req.body},{
            where:{
                id:req.params.id
            },
            returning:true
        })
        res.send(newProduct [1][0])
    } catch (error) {
        console.log(error)
        next(error) 
    }
})
router.delete("/:id",async(req,res,next)=>{
    try {
        const deletedProduct = await Product.destroy({
            where:{
                id:req.params.id
            }
        })
        res.send({deletedProduct})
        
    } catch (error) {
       console.log(error) 
       next(error) 
    }
})

//extra

router.get("/", async(req,res,next)=>{
    try {
        const findByCategory = await Product.findAll({
            where:{
                category:req.params.category
            },

        })
        res.send(findByCategory )
        
    } catch (error) {
console.log(error)
next(error)
    }
})

/// image post



export default router