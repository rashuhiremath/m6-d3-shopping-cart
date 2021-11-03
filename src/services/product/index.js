import express from "express"
import models from "../../db/models/index.js"
const {Product,Review}= models

const router = express.Router()

router.get("/",async(req,res,next)=>{
    try {

        const products = await Product.findAll({include:Review})
        res.send(products)
        
    } catch (error) {
        console.log(error) 
        next(error)
    }

})

router.post("/",async(req,res,next)=>{
    try {
        const product = await Product.create(req.body)
        res.send(product)
        
    } catch (error) {
        console.log(error) 
        next(error)
    }
})
// get by id
router.get("/:id",async(req,res,next)=>{
    try {
        const productById = await Product.findByPk(req.params.id)
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

export default router