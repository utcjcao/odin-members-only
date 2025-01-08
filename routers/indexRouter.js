const { Router } = require("express");
const { getAllMessages } = require("../db/queries");

const indexRouter = Router();

indexRouter.get("", async (req, res) => {
  const messages = await getAllMessages();
  res.render("index", { user: req.user, messages: messages });
});

module.exports = { indexRouter };
