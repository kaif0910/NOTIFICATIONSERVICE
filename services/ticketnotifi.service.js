const Ticket = require("../models/ticketNotification");
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

module.exports = {
    create
}