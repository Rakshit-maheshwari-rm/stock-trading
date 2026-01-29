const express = require("express");
const WatchlistController = require("../controllers/Watchlist");
const router = express.Router({ mergeParams: true });

router.get('/all',WatchlistController.allWatchlist);
router.get('/specific',WatchlistController.selectWatchlist);

module.exports = router;