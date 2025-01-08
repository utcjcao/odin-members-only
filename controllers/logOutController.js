const passport = require("../passport/passport");

class logOutController {
  constructor() {}

  postLogOut = async (req, res) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  };
}

module.exports = new logOutController();
