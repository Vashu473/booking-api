// const { getResquest } = require("../api/api");
// const { setToken } = require("../auth/jwt/jwt");

const Report = require("../db/schema/Report.schema");

async function getreportM() {
  try {
    const data = Report.find({});
    return { message: data, success: true, token: null };
  } catch (error) {
    return { message: error, success: false, token: null };
  }
}

module.exports = {
  getreportM,
};
