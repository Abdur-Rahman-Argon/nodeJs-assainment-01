const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const users = require("./users.json");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/random", (req, res) => {
  const user = users;
  const randomUser = user[Math.floor(Math.random() * user.length)];

  res.send(randomUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// process.on("unhandledRejection", (error) => {
//   console.log(error.name, error.message);
//   app.close(() => {
//     process.exit(1);
//   });
// });
