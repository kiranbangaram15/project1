// const express = require("express");
// const router = express.Router()

// const StudentController = require("../Controllers/studentcontroller");

// router.post("/reg", StudentController.createStudent);
// module.exports = router;

const express = require("express");
const router = express.Router()

const coursecontroller = require("../Controllers/coursecontroller");

router.post("/reg", coursecontroller.createcourse);
module.exports = router;