const mongoose=require('mongoose');

const dataSchema = new mongoose.Schema({
    name:{
        type:String, 
},

  mobile:{
      type:String,
  },

  email:{
      type:String,
  },
  dob:{
      type:String,
  },
  jobtype:{
      type:String,
  },
  location:{
      type:String
  },
  pic:{
      type:String
  }
})
module.exports = mongoose.model('DataOne',dataSchema, "employees");