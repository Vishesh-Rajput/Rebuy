const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");
require("dotenv").config();


// All the routes related to user authentication are defined here
// user registration for new account 
// 

router.post("/register", async (req, res) => {
  try {
    //check if user exist already
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      throw new Error("User already exists");
    }

    //hash password
    /*Hashing is a one-way mathematical function that converts the password into a
     fixed-length string of characters that doesn’t reveal the original password.*/

    const salt = await bcrypt.genSalt(12);   // number of rounds
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;

    //save user
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//user login

router.post("/login", async (req, res) => {
  try {
    //check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("User not found");
    }

    //check if user is blocked
    if (user.status === "blocked") {
      throw new Error("The user account is blocked , please contact admin");
    }

    //compare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      throw new Error("Invalid password");
    }

    // create and assign token
    const token = jwt.sign({ userId: user._id }, "masterkey");  
                          //element to be encoded and secret key

    //send response
    res.send({
      success: true,
      message: "User logged in successfully",
      data: token,   // sending token instead of user data (flag)
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get user
router.get("/get-current-user", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);

    res.send({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get all user
router.get("/get-users", authMiddleware, async (req, res) => {
  try {
    const user = await User.find();

    res.send({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// update user status
router.put(":/update-user-status/id", authMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);

    res.send({
      success: true,
      message: "User status updated successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
module.exports = router;
