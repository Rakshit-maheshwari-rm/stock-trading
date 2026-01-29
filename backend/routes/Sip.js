const express = require("express");
const SipController = require("../controllers/Sip");
const router = express.Router({ mergeParams: true });

router.post('/create-sip',SipController.create);
router.get('/get-sip',SipController.get);

module.exports = router;