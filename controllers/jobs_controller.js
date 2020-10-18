const Job = require("../models/job");


module.exports.jobform = function (req, res) {
  return res.render('jobform',{
      title: 'jobSearch | form'
  })
};

// get the sign up data
module.exports.create = async function (req, res) {

  try {
    let job = await Job.create({
      rol: req.body.rol,
      skills: req.body.skills,
      function: req.body.function,
      location: req.body.location,
      user: req.user._id,
    });

    // req.flash('success', 'Post Published!');
    return res.redirect('/');
  } catch (err) {
    // req.flash('error', err);
    console.log("Error#######",err);
    return res.redirect("back");
  }
};