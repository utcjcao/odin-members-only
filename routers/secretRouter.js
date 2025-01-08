const { Router } = require("express");
const {
  postSecret,
  getSecretPage,
} = require("../controllers/secretController");

const secretRouter = Router();

secretRouter.get("", async (req, res) => {
  // write render for signup
  await getSecretPage(req, res);
});

secretRouter.post("", async (req, res) => {
  await postSecret(req, res);
});

module.exports = { secretRouter };
