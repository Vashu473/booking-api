// calling log function
const logs = require("../common/logs.common");
const { sendEmail } = require("../helper/email.helper");
// calling logic function
const { loginM, signupM, profileM, deleteM } = require("../models/user.model");

async function loginC(req, res) {
  const result = await loginM(req.body);
  //   logs(req.body, result, "Test -- File name");
  return res.json(result).status(200);
}

async function signupC(req, res) {
  const result = await signupM(req.body);
  //   logs(req.body, result, "Test -- File name");
  return res.json(result).status(200);
}

async function profileC(req, res) {
  const result = await profileM(req.user);
  //   logs(req.body, result, "Test -- File name");
  return res.json(result).status(200);
}
async function deleteC(req, res) {
  const result = await deleteM(req.params.id);
  //   logs(req.body, result, "Test -- File name");
  return res.json(result).status(200);
}

module.exports = {
  loginC,
  signupC,
  profileC,
  deleteC,
};
