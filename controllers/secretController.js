const { changeMembership, changeAdmin } = require("../db/queries");

class secretController {
  constructor() {}
  getSecretPage = async (req, res) => {
    // get user sign in status here
    res.render("secret", { user: req.user });
  };
  postSecret = async (req, res) => {
    const userInput = req.body.secret;
    if (userInput === "charmander") {
      await changeMembership(req.user.username, true);
    }
    if (userInput === "bulbasaur") {
      await changeAdmin(req.user.username, true);
    }
    res.render("secret", { user: req.user });
  };
}

module.exports = new secretController();
