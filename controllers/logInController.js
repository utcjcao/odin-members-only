const passport = require("../passport/passport");

class logInController {
  constructor() {}
  getLogInPage = async (req, res) => {
    // get user login page
    res.render("login", { user: req.user });
  };
  postLogIn = (req, res) => {}; // uneeded b/c we just put the middleware in directly
  postLogOut = async (req, res) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  };
}

module.exports = new logInController();
