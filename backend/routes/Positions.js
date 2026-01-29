const express = require("express");
const PositionsController = require("../controllers/Positions");
const router = express.Router({ mergeParams: true });

router.get('/all',PositionsController.allPositions);

module.exports = router;