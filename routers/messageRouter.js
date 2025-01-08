const { Router } = require("express");
const {
  getMessagePage,
  postMessage,
  deleteMessage,
} = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("", async (req, res) => {
  // write render for signup
  await getMessagePage(req, res);
});

messageRouter.post("", async (req, res) => {
  await postMessage(req, res);
});

messageRouter.post("/delete", async (req, res) => {
  await deleteMessage(req, res);
});

module.exports = { messageRouter };
