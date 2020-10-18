const express = require("express");
const router = express.Router();

const passport = require("passport");

const jobsController = require("../controllers/jobs_controller");

router.post("/create", passport.checkAuthentication, jobsController.create);
router.get("/job_form", passport.checkAuthentication, jobsController.jobform);

module.exports = router;