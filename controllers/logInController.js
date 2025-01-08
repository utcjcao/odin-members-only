const passport = require("../passport/passport");

class logInController {
  constructor() {}
  getLogInPage = async (req, res) => {
    // get user login page
    res.render("login", { user: req.user });
  };
  postLogIn = (req, res) => {
    console.log("reached postlogin");
    try {
      passport.authenticate("local", {
        successRedirect: "/secret",
        failureRedirect: "/secret",
      });
      console.log("done");
    } catch (err) {
      console.log(err);
    }

    // res.render("index", { user: req.user });
  };
}

module.exports = new logInController();
