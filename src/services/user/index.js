import express from "express"
import models from "../../db/models/index.js"
const {User}=models

const router = express.Router()

router.get("/", async(req,res,next)=>{
    try {
        const users = await User.findAll()
        res.send(users)
        
    } catch (error) {
        console.log(error)
        next(error) 
    }
})
router.post("/", async(req,res,next)=>{
    try {
        const users = await User.create(req.body)
        res.send(users)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

//get by id
router.get("/:id", async(req,res,next)=>{
    try {
        const users = await User.findByPk(req.params.id)
        res.send(users)
        
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})
router.put("/:id", async(req,res,next)=>{
    try {
const newUser = await User.update({...req.body},{
    where:{
        id:req.params.id,
    },
    returning:true
})
res.send(newUser [1][0])
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.delete("/:id", async(req,res,next)=>{
    try {
        const deleteUser = await User.destroy({
            where:{
                id:req.params.id

            }
        })
        res.send(deleteUser)
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default router