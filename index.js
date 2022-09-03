const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const fs = require("fs");
const users = require("./users.json");

const usersRoutes = require("./routes/v1/user.route");

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello World! server is Run");
});

// app.get("/users/all", (req, res) => {
//   res.send(users);
// });

// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const user = users;
//   const singleUser = user.find((u) => u.id == id);
//   res.send(singleUser);
// });

// app.get("/users/random", (req, res) => {
//   const user = users;
//   const randomUser = user[Math.floor(Math.random() * user.length)];
//   res.send(randomUser);
// });

// app.post("/users/save", (req, res) => {
//   const newUser = req.body;
//   let user = users;
//   const newPostUser = user.push(newUser);

//   fs.writeFile("users.json", JSON.stringify(user), function (err) {
//     if (err) throw err;
//     // console.log("complete");
//   });

//   res
//     .status(200)
//     .send({ success: true, InsertedId: user.length + 1, user: user });
// });

// app.patch("/users/update/:id", (req, res) => {
//   const id = req.params.id;
//   const newUser = req.body;
//   const name = newUser?.name;
//   const gender = newUser?.gender;
//   const contact = newUser?.contact;
//   const address = newUser?.address;
//   const photoUrl = newUser?.photoUrl;

//   const user = users;
//   let updateUser = user.find((u) => u.id == id);

//   if (name) {
//     updateUser.name = newUser?.name;
//   }
//   if (gender) {
//     updateUser.gender = newUser?.gender;
//   }
//   if (contact) {
//     updateUser.contact = newUser?.contact;
//   }
//   if (address) {
//     updateUser.address = newUser?.address;
//   }
//   if (photoUrl) {
//     updateUser.photoUrl = newUser?.photoUrl;
//   }

//   const itemIndex = user.findIndex((o) => o.id === updateUser.id);
//   if (itemIndex > -1) {
//     user[itemIndex] = updateUser;
//   }

//   fs.writeFile("users.json", JSON.stringify(user), function (err) {
//     if (err) throw err;
//     // console.log("complete");
//   });

//   res.status(200).send({ success: true, user: user });
// });

// app.delete("/user/delete/:id", (req, res) => {
//   const id = req.params.id;
//   const newUser = req.body;
//   const user = users;
//   const deleteUser = user.filter((u) => u.id != id);
//   console.log(deleteUser);

//   fs.writeFile("users.json", JSON.stringify(deleteUser), function (err) {
//     if (err) throw err;
//     // console.log("complete");
//   });

//   res.status(200).send({ success: true, user: deleteUser });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// process.on("unhandledRejection", (error) => {
//   console.log(error.name, error.message);
//   app.close(() => {
//     process.exit(1);
//   });
// });
