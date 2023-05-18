const { setToken } = require("../auth/jwt/jwt");
const User = require("../db/schema/User.schema");

async function loginM(body) {
  try {
    const user = await User.findOne({ email: body.email });
    if (user?.email) {
      const storeToken = await setToken({ ...body, ...user._doc });
      return {
        message: "Login Sucessfull",
        success: true,
        token: storeToken,
      };
    } else {
      return { message: "User Not Found", success: false, token: null };
    }
  } catch (error) {
    return { message: error, success: false, token: null };
  }
}
async function signupM(body) {
  try {
    await User.create(body);
    return { message: "User Created", success: true, token: null };
  } catch (error) {
    return { message: error, success: false, token: null };
  }
}
async function profileM(user) {
  try {
    const userData = await User.findOne({ email: user.email });
    return { message: userData, success: true, token: null };
  } catch (error) {
    return { message: error, success: false, token: null };
  }
}
async function deleteM(_id) {
  try {
    await User.deleteOne({ _id });
    return { message: "User Deleted", success: true, token: null };
  } catch (error) {
    return { message: error, success: false, token: null };
  }
}

module.exports = {
  loginM,
  signupM,
  deleteM,
  profileM,
};
