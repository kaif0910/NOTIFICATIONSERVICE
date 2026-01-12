const express = require("express");
const ticketnotifiController = require("../controllers/ticketnotifi.controller");
const ticketMiddleware = require("../middlewares/ticket.middleware");

const routes = (app) => {
    app.post(
        "/notiservice/api/v1/notifications",
        ticketMiddleware.validateCreateRequest,
        ticketnotifiController.createTicket
    );

    app.get(
        "/notiservice/api/v1/notifications",
        ticketnotifiController.getAllNotifications
    );

    app.get(
        "/notiservice/api/v1/notifications/:id",
        ticketnotifiController.getAllNotifications
    )
}

module.exports = routes;

