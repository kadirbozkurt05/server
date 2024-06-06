const express = require("express");
const { apply, contact, newsletter } = require("../controllers/otherController.js");

const otherRouter = express.Router();

otherRouter.post("/apply", apply);
otherRouter.post("/newsletter", newsletter);
otherRouter.post("/contact", contact);


module.exports = otherRouter;
