const express = require("express");
const AuctionController = require("../controllers/Auction");
const router = express.Router({ mergeParams: true });

router.get('/get',AuctionController.get);

module.exports = router;