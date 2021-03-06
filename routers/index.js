const express = require("express");
// create a route handlers
const router = express.Router();
const homeConroller = require("../controllers/home_controller");

router.get("/", homeConroller.home);
router.use("/users", require("./users"));
router.use("/jobs", require("./jobs"));

module.exports = router;