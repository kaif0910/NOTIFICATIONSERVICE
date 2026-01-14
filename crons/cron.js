const cron = require("node-cron");
const ticketNotificationModel = require("../models/ticketNotification.model");
const sendMail = require("../services/email.service");

cron.schedule("*/2 * * * *", async () => {
    const notificationsToBeSent = await ticketNotificationModel.find({
        status: PENDING
    });

    notificationsToBeSent.forEach(notification => {
        const mailData = {
            from: "mba@support.com",
            to: notification.recepientEmails,
            subject: notification.subject,
            text: notification.content
        };
        sendMail(process.env.EMAIL,process.env.EMAIL_PASSWORD,mailData);
    })
})