const ticketNotificationModel = require("../models/ticketNotification.model");
const Ticket = require("../models/ticketNotification.model");
const {STATUS} = require("../utils/constants");

const create = async (data) =>{
    try {
       const response = await Ticket.create(data);
       return response; 
    } catch (error) {
        if(error.name == "ValidationError"){
            Object.keys(error.errors).forEach(key => {
                err[key] = error.errors[key].message;
            });
            throw {
                err,
                code: STATUS.UNPROCESSIBLE_ENTITY
            }
        }
        throw error;
    }
}

const getAllNotifications = async () => {
    try {
        const response = await ticketNotificationModel.find();
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getAllNotifications
}