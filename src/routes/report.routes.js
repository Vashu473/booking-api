const express = require("express");
const ReportRouter = express.Router();
const celebrate = require("celebrate");
const { getToken } = require("../auth/jwt/jwt");
// calling functions
const { getreportC } = require("../controllers/report.controller");

// Get game list

//  get token will validate your jwt token

ReportRouter.get("/getreport", getreportC);

module.exports = ReportRouter;
