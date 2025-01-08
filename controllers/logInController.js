const passport = require("passport");

class logInController {
  constructor() {}
  getLogInPage = async (req, res) => {
    // get user login page
    res.render("login", { user: req.user });
  };
  postLogIn = async (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/secret",
      failureRedirect: "/secret",
    });
    // res.render("index", { user: req.user });
  };
}

module.exports = new logInController();
