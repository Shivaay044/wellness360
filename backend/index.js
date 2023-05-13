const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const app = express();
require("dotenv").config();
const { userRouter } = require("./routes/user.route");
const { auth } = require("./middleware/auth.middleware");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "This is home page" });
});

app.use("/users", userRouter);

//middleware for protecting routes
app.use(auth);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
    console.log("Something went wrong, Didn't Connect");
  }

  console.log(`Server is running at port ${process.env.PORT}`);
});
