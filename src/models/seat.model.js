const Report = require("../db/schema/Report.schema");
const Seat = require("../db/schema/Seat.schema");

async function getSeatM(body) {
  try {
    const data = await Seat.find({});
    return { message: data, success: true, token: null };
  } catch (error) {
    return { message: error, success: false, token: null };
  }
}
async function bookM(body) {
  try {
    const { seat, department, start, end } = body;
    await Seat.findOneAndUpdate({ seat, department }, { start, end });
    await Report.create(body);
    return { message: "Seat Booked", success: true, token: null };
  } catch (error) {
    return { message: error, success: false, token: null };
  }
}
async function addSeatM(body) {
  try {
    const data = await Seat.insertMany(body.list);
    return { message: data, success: true, token: null };
  } catch (error) {
    return { message: error, success: false, token: null };
  }
}

module.exports = {
  getSeatM,
  bookM,
  addSeatM,
};
