const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("hello");
});

module.exports = router;
