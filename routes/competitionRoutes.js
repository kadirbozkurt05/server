const express = require("express");
const {
  createCompetition,
  getCompetitions,
  updateCompetition,
  deleteCompetition,
} = require("../controllers/competitionController.js");


const competitionRouter = express.Router();

competitionRouter.post("/competition/create", createCompetition);
competitionRouter.get("/competition/all", getCompetitions);
competitionRouter.put("/competition/:id", updateCompetition);
competitionRouter.delete("/competition/delete/:id", deleteCompetition);

module.exports = competitionRouter;
