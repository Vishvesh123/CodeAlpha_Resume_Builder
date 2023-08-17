const express = require("express");
const bodyParser=require('body-parser');
const cors = require("cors");
require("./DB/config");
const User = require("./DB/user");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
  origin:'https://resume-builder-rn31.onrender.com',
  credentials:true,
  methods:['POST'],
}));

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

// app.post("/login", async (req, res) => {
//   if (req.body.password && req.body.email) {
//     let user = await User.findOne(req.body).select("-password");
//     if (user) {
//       res.send(user);
//     } else {
//       res.send({ result: "No user found" });
//     }
//   } else {
//     res.send({ result: "No user found" });
//   }
// });
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    const user = await User.findOne({ email }).select("-password");

    if (user) {
      res.json({success:true,user})
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "An error occurred during login." });
  }
});


app.listen(4000, (req, res) => {
  console.log("server is running on port 4000...");
});
