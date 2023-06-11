const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

const authRouter = require("./routes/authRoutes");
const friendRouter = require("./routes/friendRoute");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());
app.use("/api/authentiaction", authRouter);
app.use("/api/friend", friendRouter);
//add authentication middleware here

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
