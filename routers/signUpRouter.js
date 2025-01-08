const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const {
  postSignUp,
  getSignUpPage,
} = require("../controllers/signUpController");

const signUpRouter = Router();

const validateInput = [
  body("username").trim().notEmpty().withMessage("username can not be empty."),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Last name can not be empty.")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .custom((value, { req }) => {
      if (value !== req.body.confirmPassword) {
        return false;
      }
      return true;
    })
    .withMessage("Passwords do not match."),
];

signUpRouter.get("", async (req, res) => {
  // write render for signup
  await getSignUpPage(req, res);
});

signUpRouter.post("", validateInput, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array()[0]);
    return res.render("signup", {
      message: errors.array()[0].msg,
    });
  }
  //   write post for signup
  await postSignUp(req, res);
});

module.exports = { signUpRouter };
