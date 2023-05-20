// const { getResquest } = require("../api/api");
// const { setToken } = require("../auth/jwt/jwt");

const Report = require("../db/schema/Report.schema");

async function getreportM() {
  try {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    const data = await Report.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(year, month, day),
          },
        },
      },
    ]);
    return { message: data, success: true, token: null };
  } catch (error) {
    return { message: error, success: false, token: null };
  }
}

module.exports = {
  getreportM,
};
