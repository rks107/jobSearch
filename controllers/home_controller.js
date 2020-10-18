const Job = require("../models/job");
const User = require("../models/user");

module.exports.home = async function(req, res){
    let jobs = await Job.find({}).sort("-createdAt");

    return res.render("home", {
      title: "jobSearch | Home",
      jobs: jobs,
    });
}