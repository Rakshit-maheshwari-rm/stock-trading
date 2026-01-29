const express = require("express");
const BasketController = require("../controllers/Basket");
const router = express.Router({ mergeParams: true });

router.post('/create',BasketController.create);
router.get('/get',BasketController.getBasket);

module.exports = router;