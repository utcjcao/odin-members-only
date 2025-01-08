const { Router } = require("express");
const { postLogIn, getLogInPage } = require("../controllers/loginController");

const logInRouter = Router();

logInRouter.get("", async (req, res) => {
  await getLogInPage(req, res);
});

logInRouter.post("", async (req, res) => {
  await postLogIn(req, res);
});

module.exports = { logInRouter };
