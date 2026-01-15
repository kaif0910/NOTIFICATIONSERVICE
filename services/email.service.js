const nodemailer = require("nodemailer");

 const mailer = (userId,password, mailData) => {
    return nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: userId,
            pass: password
        }
    });
    // transport.sendMail(
    //     {
    //         from: mailData.from,
    //         to: mailData.to,
    //         subject: mailData.subject,
    //         text: mailData.content
    //     }
    // )
 }

 module.exports = mailer;