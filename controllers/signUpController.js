const { registerUser } = require("../db/queries");
const bcryptjs = require("bcryptjs");
const passport = require("../passport/passport");

class signUpController {
  constructor() {}
  getSignUpPage = async (req, res) => {
    // get user sign in status here
    res.render("signup", { message: "", user: req.user });
  };
  postSignUp = async (req, res) => {
    try {
      const hashedPassword = await bcryptjs.hash(req.body.password, 10);

      const isUserRegistered = await registerUser(
        req.body.username,
        hashedPassword
      );

      if (isUserRegistered === "success") {
        res.render("signup", {
          message: "your account has been created! you can login now",
          user: req.user,
        });
      } else {
        res.render("signup", { message: isUserRegistered, user: req.user });
      }
    } catch (error) {
      res.render("signup", { message: error.msg, user: req.user });
    }
  };
}

module.exports = new signUpController();
