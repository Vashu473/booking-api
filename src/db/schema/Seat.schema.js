const mongoose = require("mongoose");

const SeatSchema = mongoose.Schema(
  {
    seat: String,
    department: String,
    start: Date,
    end: Date,
  },
  { timestamps: true }
);

const Seat = mongoose.model("Seat", SeatSchema);

module.exports = Seat;
