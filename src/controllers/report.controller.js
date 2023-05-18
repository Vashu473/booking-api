// calling log function
const logs = require("../common/logs.common");
// calling logic function
const { getreportM } = require("../models/report.model");

async function getreportC(req, res) {
  // console.log("Api name", req.body);
  const result = await getreportM();
  // console.log("Result--", result);
  // logs(req.body, result, "Test -- File name");
  return res.json(result).status(200);
}
module.exports = {
  getreportC,
};
