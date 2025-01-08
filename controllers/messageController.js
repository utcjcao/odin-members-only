const { postMessage, deleteMessage } = require("../db/queries");
const passport = require("../passport/passport");

class messageController {
  constructor() {}
  getMessagePage = async (req, res) => {
    res.render("message", { user: req.user, message: "" });
  };

  postMessage = async (req, res) => {
    try {
      await postMessage(req.body.title, req.body.message, req.user.username);
      res.render("message", { user: req.user, message: "message added" });
    } catch (err) {
      res.render("message", {
        user: req.user,
        message: "message adding failed",
      });
    }
  };

  deleteMessage = async (req, res) => {
    await deleteMessage(req.params.id);
  };
}

module.exports = new messageController();
