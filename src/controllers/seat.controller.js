// calling log function
const logs = require("../common/logs.common");
// calling logic function
const { getSeatM, bookM, addSeatM } = require("../models/seat.model");
// test to get data
async function getSeatC(req, res) {
  // console.log("Api name", req.body);
  const result = await getSeatM(req.params.department);
  // console.log("Result--", result);
  // logs(req.body, result, "Test -- File name");
  return res.json(result).status(200);
}
// test
async function bookC(req, res) {
  // console.log("Api name", req.body);
  const result = await bookM(req.body);
  // console.log("Result--", result);
  // logs(req.body, result, "Test -- File name");
  return res.json(result).status(200);
}
// test
async function addSeatC(req, res) {
  // console.log("Api name", req.body);
  const result = await addSeatM(req.body);
  // console.log("Result--", result);
  // logs(req.body, result, "Test -- File name");
  return res.json(result).status(200);
}
module.exports = {
  getSeatC,
  bookC,
  addSeatC,
};
