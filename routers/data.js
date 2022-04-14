const express = require('express');

const router = express.Router();
const DataOne=require("../modules/dataOne")

router.get('/', async(req,res)=>{
    
    const ans= await DataOne.find();
  
  res.send(ans);
  
    
})

router.post('/',async (req,res)=>{
  
    
    const val =new DataOne({
        name:req.body.Name,
        mobile:req.body.Num,
        email:req.body.Email,
        dob:req.body.Dob,
        jobtype:req.body.Jobtype,
        location:req.body.Location,
        pic:req.body.Pic
    })
    await val.save();
   res.send(val)
})

router.delete('/:id',async(req,res)=>{
    const deleteEmp = await DataOne.findByIdAndDelete(req.params.id);
      res.send(deleteEmp);
  })
  router.put('/:id',async(req,res)=>{
    const updateEmp= await DataOne.findByIdAndUpdate(req.params.id,{name:req.body.Name,
      mobile:req.body.Num,
      email:req.body.Email,
      dob:req.body.Dob,
      jobtype:req.body.Jobtype,
      location:req.body.Location,
      pic:req.body.Pic
    });
      
     res.send(updateEmp);
  })
module.exports = router