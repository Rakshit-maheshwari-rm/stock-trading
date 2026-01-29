const express = require("express");
const passport = require("passport");
const { signup, login, logout, checkUser } = require("../controllers/AuthController");
const router = express.Router();

router.post("/signup",signup);
router.post("/login", login);
router.post("/logout",logout);
router.get("/check",checkUser);

module.exports = router;
