const express = require("express");
const router = express.Router({ mergeParams: true });
const GttController = require("../controllers/Gtt");

router.get('/get-gtt',GttController.getGtt);

module.exports = router;