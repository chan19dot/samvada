const express = require("express");
var bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
