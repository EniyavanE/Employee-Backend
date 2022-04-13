const express=require('express');
const mongoose=require('mongoose');
const app=express();
const  cors = require("cors");
app.use(cors());
const url='mongodb://127.0.0.1:27017/employesdb'
let db;
 mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true}).then(x => {
     console.log("mongodb connected");
      db=mongoose.connection
    })
app.use(express.json());

const dataRouter=require('./routers/data')
app.use('/data',dataRouter);
app.listen(5000,()=>{console.log("connected")});