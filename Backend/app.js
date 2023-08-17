const express = require("express");
const cors = require("cors");
require("./DB/config");
const User = require("./DB/user");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/resister", async (req, res) => {
  const email = req.body.email;

  let newuser = await User.findOne({ email });

  if (newuser) {
    return;
  }

  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;

  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No user found" });
    }
  } else {
    res.send({ result: "No user found" });
  }
});

app.listen(4000, (req, res) => {
  console.log("server is running on port 4000...");
});
