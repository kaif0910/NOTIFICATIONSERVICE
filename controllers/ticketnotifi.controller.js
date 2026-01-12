const ticketnotifiService = require("../services/ticketnotifi.service");
const {STATUS } = require("../utils/constants")
const {errorResponseBody,successResponseBody} = require("../utils/responsebody");

const createTicket = async (req,res) => {
    try {
        const response = await ticketnotifiService.create(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "Successfully created a notification ticket";
        return res.status(STATUS.CREATED).json(successResponseBody);
    } catch (error) {
        if(error.err){
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
}

const getAllNotifications = async (req,res) => {
    try {
        const response = await ticketnotifiService.getAllNotifications();
        successResponseBody.data = response;
        successResponseBody.message = "Successfully fetched all the notifications";
        return res.status(STATUS.OK).json(successResponseBody);
    } catch (error) {
        if(error.err){
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }

        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
}


const getNotifiByid = async (req,res) => {
    try {
        const response = await ticketnotifiService.getNotifiByid(req.params.ticketId);
        successResponseBody.data = response;
        successResponseBody.message = "ticket details of the required id is fetched successfully";
        return res.status(STATUS.OK).json(successResponseBody);
    } catch (error) {
        if(error.err){
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
}

module.exports = {
    createTicket,
    getAllNotifications,
    getNotifiByid
}