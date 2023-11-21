const express = require('express');
const router = express.Router();
const Admin = require("../Models/adminModel")


router.post("/login",async(req,res)=>{

    const {username,password}=req.body

    try{
        
        const admin = await Admin.findOne({username,password})
        if(admin){
            res.send(admin)
        }
        else{
            return res.status(400).json(error);
        }
    }
    catch(error){
        return res.status(400).json(error);
    }
});


module.exports=router;
