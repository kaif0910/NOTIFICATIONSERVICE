const express = require("express");
const ticketnotifiController = require("../controllers/ticketnotifi.controller");
const ticketMiddleware = require("../middlewares/ticket.middleware");

const routes = (app) => {
    app.post(
        "/notiservice/api/v1/notifications",
        ticketMiddleware.validateCreateRequest,
        ticketnotifiController.createTicket
    );
}

module.exports = routes;

