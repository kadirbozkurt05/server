const express = require("express");
const cors = require("cors");
const { config } = require("./config.js");
const userRouter = require("./routes/userRoutes.js");
const competitionRouter = require("./routes/competitionRoutes.js");
const newsRouter = require("./routes/newsRoutes.js");
const otherRouter = require("./routes/otherRoutes.js");
const http = require("http");
const cookieParser = require("cookie-parser");



const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb' }));

app.use(express.static("dist"))




app.use("/api", userRouter);
app.use("/api", competitionRouter);
app.use("/api", newsRouter);
app.use("/api", otherRouter);

const server = http.createServer(app);
const port = config.port || 5000

server.listen(port, '0.0.0.0',() =>
  console.log(`Server is live @ ${config.host_url}`)
);
