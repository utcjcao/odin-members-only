const path = require("path");
const express = require("express");
const passport = require("./passport/passport");
const session = require("express-session");
const { signUpRouter } = require("./routers/signUpRouter");
const { logInRouter } = require("./routers/logInRouter");
const { secretRouter } = require("./routers/secretRouter");
const { indexRouter } = require("./routers/indexRouter");

const app = new express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/signup", signUpRouter);
app.use("/login", logInRouter);
app.use("/secret", secretRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
