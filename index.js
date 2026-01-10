const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");

env.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.listen(process.env.PORT,async () =>{
    console.log(`server running ON ${process.env.PORT}`);
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("db connected");
    } catch (error) {
        console.log("cannot connect to database",error);
    }
});
