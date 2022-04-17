const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const dataRouter = require('./Routers')
require('dotenv').config()

const url = process.env.MONGO_DB_CON_STRING;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(x => {
  console.log("mongodb connected");
})

app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));
app.use(express.text({ limit: '200mb' }))
app.use(cors());
app.use('/data', dataRouter);

app.listen(process.env.PORT || 5000, () => { console.log("connected") });