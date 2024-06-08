const express = require("express");
const cors = require("cors");
const userRouter = require("./../routes/userRoutes.js");
const competitionRouter = require("./../routes/competitionRoutes.js");
const newsRouter = require("./../routes/newsRoutes.js");
const otherRouter = require("./../routes/otherRoutes.js");
const serverless = require("serverless-http");
const cookieParser = require("cookie-parser");



const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb' }));

app.use(express.static("dist"))

app.use("/.netlify/functions/api",userRouter);
app.use("/.netlify/functions/api",userRouter);
app.use("/.netlify/functions/api",competitionRouter);
app.use("/.netlify/functions/api",newsRouter);
app.use("/.netlify/functions/api",otherRouter);

module.exports.handler = serverless(app);