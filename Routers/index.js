const express = require('express');

const router = express.Router();
const employeeModel = require("../Schemas/employee")

router.get('/', async (req, res) => {
  try {
    const ans = await employeeModel.find();
    res.send(ans);
  }
  catch (err) {
    console.log("Error", err);
    res.statusCode(500).send("Internal server error");
  }
})

router.post('/', async (req, res) => {
  try {
    const val = new employeeModel({
      name: req.body.Name,
      mobile: req.body.Num,
      email: req.body.Email,
      dob: req.body.Dob,
      jobtype: req.body.Jobtype,
      location: req.body.Location,
      pic: req.body.Pic
    })
    await val.save();
    res.send(val)
  }
  catch (err) {
    console.log("Error", err);
    res.statusCode(500).send("Internal server error");
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deleteEmp = await employeeModel.findByIdAndDelete(req.params.id);
    res.send(deleteEmp);
  }
  catch (err) {
    console.log("Error", err);
    res.statusCode(500).send("Internal server error");
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updateEmp = await employeeModel.findByIdAndUpdate(req.params.id, {
      name: req.body.Name,
      mobile: req.body.Num,
      email: req.body.Email,
      dob: req.body.Dob,
      jobtype: req.body.Jobtype,
      location: req.body.Location,
      pic: req.body.Pic
    });

    res.send(updateEmp);
  }
  catch (err) {
    console.log("Error", err);
    res.statusCode(500).send("Internal server error");
  }
})
module.exports = router