// const express = require("express");
// const router = express.Router()


// module.exports = router;

const express = require("express");
const router = express.Router()
const StudentController = require("../Controllers/studentcontroller");
const coursecontroller = require("../Controllers/coursecontroller");

router.post("/std-reg", StudentController.createStudent);
router.post("/corse-reg", coursecontroller.createcourse);
router.post("/login", StudentController.loginStudent);
module.exports = router;