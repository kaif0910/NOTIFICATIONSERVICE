const { errorResponseBody } = require("../utils/responsebody");
const { STATUS } = require("../utils/constants");

const validateCreateRequest = (req,res,next) => {
    if(!req.body.subject){
        errorResponseBody.err = "no subject provided";
        return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
    }

    if(!req.body.content){
        errorResponseBody.err = "no content provided";
        return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
    }

    if(!req.body.recepientEmails || !(req.body.recepientEmails instanceof Array) || req.body.recepientEmails.length <= 0){
        errorResponseBody.err = "no recepient Emails provided";
        return res.status(STATUS.BAD_REQUEST).json(errorResponseBody);
    }

    next();
}

module.exports = {
    validateCreateRequest
}