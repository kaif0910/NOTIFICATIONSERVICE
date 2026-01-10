const nodemailer = require("nodemailer");

 const sendMail = (userId,password) => {
    const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: userId,
            pass: password
        }
    });
    transport.sendMail(
        {
            from: "mba@support.com",
            to: "kaifkhan7070@gmail.com",
            subject: "test email for nodemailer",
            text: "hey , this is a test email"
        }
    )
 }

 module.exports = sendMail;