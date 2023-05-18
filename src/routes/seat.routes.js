const express = require("express");
const SeatRouter = express.Router();
const celebrate = require("celebrate");
const { getToken } = require("../auth/jwt/jwt");
// calling functions
const { getSeatC, bookC, addSeatC } = require("../controllers/seat.controller");

// Get game list

//  get token will validate your jwt token

SeatRouter.get("/getSeat", getToken, getSeatC);
SeatRouter.post("/addSeat", getToken, addSeatC);
SeatRouter.post("/book", getToken, bookC);

module.exports = SeatRouter;
