const express = require("express");
const UserRouter = express.Router();
const celebrate = require("celebrate");
const { getToken } = require("../auth/jwt/jwt");
// calling functions
const {
  loginC,
  signupC,
  profileC,
  deleteC,
} = require("../controllers/user.controller");

//  get token will validate your jwt token

UserRouter.get("/profile", getToken, profileC);
UserRouter.post("/login", loginC);
UserRouter.post("/signup", signupC);
UserRouter.delete("/delete:id", deleteC);

module.exports = UserRouter;
