const passport = require("../passport/passport");

class loginController {
  constructor() {}
  getLogInPage = async (req, res) => {
    // get user login page
    res.render("login", { user: req.user, message: req.flash("error") });
  };
  postLogIn(req, res) {} // uneeded b/c we just put the middleware in directly
  postLogOut = async (req, res) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  };
}

module.exports = new loginController();
