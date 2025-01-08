const { Router } = require("express");
const { postLogIn, getLogInPage } = require("../controllers/loginController");
const passport = require("../passport/passport");

const logInRouter = Router();

logInRouter.get("", async (req, res) => {
  await getLogInPage(req, res);
});

logInRouter.post(
  "",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

module.exports = { logInRouter };
