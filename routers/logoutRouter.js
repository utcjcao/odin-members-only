const { Router } = require("express");
const { postLogOut } = require("../controllers/logInController");

const logOutRouter = Router();

logOutRouter.get("", async (req, res) => {
  await postLogOut(req, res);
});

module.exports = { logOutRouter };
