const express = require("express");
const {
  createNews,
  getNews,
  updateNews,
  deleteNews,
} =require("../controllers/newsController.js");

const newsRouter = express.Router();

newsRouter.post("/news/create", createNews);
newsRouter.get("/news/all", getNews);
newsRouter.put("/news/:id", updateNews);
newsRouter.delete("/news/delete/:id", deleteNews);

module.exports = newsRouter;




