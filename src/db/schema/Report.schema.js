const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema(
  {
    seat: String,
    location: String,
    store: String,
    email: String,
    name: String,
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;
