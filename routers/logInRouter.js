const { Router } = require("express");
const { getLogInPage } = require("../controllers/loginController");
const passport = require("../passport/passport");
const loginRouter = Router();

loginRouter.get("", async (req, res) => {
  await getLogInPage(req, res);
});

// Your login route where passport is used
loginRouter.post("", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("error", info.message || "Invalid credentials");
      return res.redirect("login");
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/");
    });
  })(req, res, next);
});

module.exports = { loginRouter };
