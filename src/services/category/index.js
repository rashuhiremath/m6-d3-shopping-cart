import express from "express"
import models from "../../db/models/index.js"
const {Category} = models

const router = express.Router()

router.get("/", async(req,res,next)=>{
    try {
        const categories = await Category.findAll()
        res.send(categories)
        
    } catch (error) {
        console.log(error)
        next(error) 
    }
})
router.post("/", async(req,res,next)=>{
    try {
        const categories = await Category.create(req.body)
        res.send(categories)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

//get by id
router.get("/:id", async(req,res,next)=>{
    try {
        const categories = await Category.findByPk(req.params.id)
        res.send(categories)
        
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})
router.put("/:id", async(req,res,next)=>{
    try {
const newCategories = await Category.update({...req.body},{
    where:{
        id:req.params.id,
    },
    returning:true
})
res.send(newCategories[1][0])
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.delete("/:id", async(req,res,next)=>{
    try {
        const deleteCategory = await Category.destroy({
            where:{
                id:req.params.id

            }
        })
        res.send(deleteCategory)
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default router