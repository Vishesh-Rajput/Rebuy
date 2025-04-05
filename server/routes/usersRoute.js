const router = require("express").Router();
const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

// new user registration

router.post("/register", async (req, res) => {
  try {
    //check if user already exists
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      throw new Error("User already exists");
    }

    // hashing password (adding random chars till fixed len)
    const salt = await bcrypt.genSalt(10);
    // salt is number of random characters that are added to the password before hashing it.

    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // if two users have same password then their hashed password will be diffrent becoz salt.
    req.body.password = hashedPassword;
    // hased pass jayga db me

    //  user ko save kro
    const newUser = new User(req.body);
    await newUser.save();
    res,
      send({
        success: true,
        message: "User registered successfully",
      });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});

// login user

router.post("/login", async (req, res) => {
  try {
    //checking user
    const user = await findOne({
      email: req.body.email,
    });
    if (!user) {
      throw new Error("User not found");
    }
    // checking password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      throw new Error("Invalid password");
    } 

    // create and assign a token
    const token = jwt.sign({ userid: user._id }, process.env.jwt_secret, ); 
     {
      res.send({
        success: true,
        message: "Login successful",
        data:token,
      
      });
    }
  }
  catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  } 
});

module.exports = router;