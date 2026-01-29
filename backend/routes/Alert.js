const express = require("express");
const AlertController = require("../controllers/Alert");
const router = express.Router({ mergeParams: true });

router.post('/create',AlertController.create);
router.get('/get',AlertController.get);

module.exports = router;