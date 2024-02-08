const express=require("express")
const covidModel=require("../model/covidmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let covid=new covidModel(data)
    let result=await covid.save()
    res.json({
        status:"success"
    })
})



module.exports=router