const express = require('express');

const router = express.Router();
const DataOne=require("../modules/dataone")
const ObjectId=require('mongodb').ObjectId;
router.get('/', async(req,res)=>{
  console.log("print")
  // const myId=JSON.parse(req.params.id);
    const ans= await DataOne.find();
    console.log(ans);
  res.send(ans);
  
    
})

router.post('/',async (req,res)=>{
  console.log("finally we made it");
    JSON.stringify(DataOne)
    const val =new DataOne({
        name:req.body.Name,
        mobile:req.body.Num,
        email:req.body.Email,
        dob:req.body.Dob,
        jobtype:req.body.Jobtype,
        location:req.body.Location
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
      location:req.body.Location});
      
     res.send(updateEmp);
  })
module.exports = router