const cron = require("node-cron");
const ticketNotificationModel = require("../models/ticketNotification.model");
const Mailer = require("../services/email.service");

const mailerCron = () => {
    const mailer = Mailer(process.env.EMAIL,process.env.EMAIL_PASSWORD); 
    cron.schedule("*/2 * * * *", async () => {
        const notificationsToBeSent = await ticketNotificationModel.find({
            status: "PENDING"
    });

    notificationsToBeSent.forEach(notification => {
        const mailData = {
            from: "mba@support.com",
            to: notification.recepientEmails,
            subject: notification.subject,
            text: notification.content
        };
        mailer.sendMail(mailData , async (err,data) => {
            if(err){
                console.log(err);
            }else{
                console.log(data.response);
                const savedNotification = await ticketNotificationModel.findOne({
                    _id: notification._id
                });
                savedNotification.status = "SUCCESS";
                await savedNotification.save();
            }
        })
    })
});
}

module.exports = {
    mailerCron
};


