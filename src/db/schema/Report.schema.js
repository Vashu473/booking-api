const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema(
  {
    seat: String,
    department: String,
    email: String,
    name: String,
    start: Date,
    end: Date,
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;
