const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");
const cron = require("./crons/cron");
const ticketnotifiRoutes = require("./routes/ticketnotifi.routes");


env.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

ticketnotifiRoutes(app);//invoking ticket service routes

app.listen(process.env.PORT,async () =>{
    console.log(`Notification server running ON ${process.env.PORT}`);
    // sendMail(process.env.EMAIL,process.env.EMAIL_PASSWORD);
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("db connected");
    } catch (error) {
        console.log("cannot connect to database",error);
    }

    cron.mailerCron();
});
