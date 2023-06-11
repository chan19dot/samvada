const express = require("express");
const { getName } = require("../service/friendService");

const router = express.Router();

router.get("/getName", getName);

module.exports = router;
