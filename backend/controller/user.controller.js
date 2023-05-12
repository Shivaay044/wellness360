const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    bcrypt.hash(password, 2, async (err, hash) => {
      // Store hash in your password DB.
      const newUser = new UserModel({ name, email, mobile, password: hash });
      await newUser.save();
      res.status(200).send({ msg: "New User has been registered" });
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        // result == true
        if (result) {
          let token = jwt.sign({ userID: user._id, user: user.name }, "shivam");
          res.status(200).send({ msg: "Login Successful", token: token });
        } else {
          res.status(200).send({ msg: "Check Your Credentials" });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports = { register, login };
