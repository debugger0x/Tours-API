const express = require("express");
const viewsController = require("../controllers/viewsController");

const Router = express.Router();

Router.get("/", viewsController.getOverview);
Router.get("/tour", viewsController.getTour);
Router.get("/tour/:slug", viewsController.getTour);

module.exports = Router;
