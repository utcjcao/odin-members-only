const { Router } = require("express");
const { postLogOut } = require("../controllers/logOutController");

const logOutRouter = Router();

logOutRouter.postLogOut("", async (req, res) => {
  await postLogOut(req, res);
});

module.exports = { logOutRouter };
