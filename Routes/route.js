const express = require("express");
const router = express.Router()

const Donatecontroller = require("../Controllers/Donatecontroller");

router.post("/register", Donatecontroller.createDonate);
module.exports = router;