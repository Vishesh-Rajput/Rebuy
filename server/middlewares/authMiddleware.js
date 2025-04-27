const jwt = require("jsonwebtoken");

//custom middleware to check if user is authenticated
// middle ware checks the token in the header and verifies it
// if the token is valid, it adds the userId to the request body

module.exports = (req, res, next) => {
  try {
    //get token from header
    const token = req.header("authorization").split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = decryptedToken.userId;
    next();
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
