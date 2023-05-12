const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      let decoded = jwt.verify(token.split(" ")[1], "shivam");
      if (decoded) {
        console.log(decoded);
        req.body.userID = decoded.userID;
        req.body.name = decoded.user;
        next();
      } else {
        res.status(200).send({ msg: "Please Login First" });
      }
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  } else {
    res.status(200).send({ msg: "Please Login First" });
  }
};

module.exports = { auth };
