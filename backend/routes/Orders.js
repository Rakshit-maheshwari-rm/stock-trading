const express = require("express");
const router = express.Router({ mergeParams: true });
const OrderController = require("../controllers/Orders");

router.post('/place-order',OrderController.placeOrders);
router.get('/get-order',OrderController.getOrder);
router.delete('/delete-order',OrderController.deleteOrder);

module.exports = router;