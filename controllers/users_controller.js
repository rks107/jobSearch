const User = require("../models/user");


// render Sign in page
module.exports.signIn = function (req, res) {
//   if (req.isAuthenticated()) {
//     return res.redirect("/users/profile");
//   }

  return res.render("user_sign_in", {
    title: "mediaTrend | Sign In",
  });
};

// render sign up page
module.exports.signUp = function (req, res) {
//   if (req.isAuthenticated()) {
    // return res.redirect("/users/profile");
//   }

  return res.render("user_sign_up", {
    title: "mediaTrend | Sign Up",
  });
};

// get the sign up data
module.exports.create = function (req, res) {
  // TODO Later
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in Signing up");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user while Signing Up");
          return;
        }
        res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};
