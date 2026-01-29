const express = require("express");
const HoldingsController = require("../controllers/Holdings");
const router = express.Router({ mergeParams: true });

router.get('/all',HoldingsController.allHoldings);

module.exports = router;