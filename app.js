require("dotenv").config();

const path = require("path");
const express = require("express");
const passport = require("./passport/passport");
const session = require("express-session");

const expressSession = require("express-session");
const SessionStore = require("express-session-sequelize")(expressSession.Store);

const { signUpRouter } = require("./routers/signUpRouter");
const { loginRouter } = require("./routers/logInRouter");
const { secretRouter } = require("./routers/secretRouter");
const { indexRouter } = require("./routers/indexRouter");
const { messageRouter } = require("./routers/messageRouter");
const { logOutRouter } = require("./routers/logoutRouter");
const flash = require("connect-flash");

const Sequelize = require("sequelize");
const myDatabase = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
  }
);

const sequelizeSessionStore = new SessionStore({
  db: myDatabase,
});
const app = new express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: false,
    store: sequelizeSessionStore,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use("/signup", signUpRouter);
app.use("/login", loginRouter);
app.use("/logout", logOutRouter);
app.use("/secret", secretRouter);
app.use("/message", messageRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
