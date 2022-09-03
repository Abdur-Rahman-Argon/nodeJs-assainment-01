const users = require("./../users.json");
const fs = require("fs");

module.exports.getAllUsers = (req, res, next) => {
  res.send(users);
};

//--------------------------------------------------------

module.exports.getLimitUsers = (req, res, next) => {
  const { limit } = req.query;
  const user = users;
  res.send(user.slice(0, limit));
};

//---------------------------------------------------------

module.exports.getOneUsers = (req, res, next) => {
  const id = req.params.id;
  const user = users;
  const singleUser = user.find((u) => u.id == id);
  res.send(singleUser);
};

//---------------------------------------------------

module.exports.getRandomUsers = (req, res, next) => {
  const user = users;
  const randomUser = user[Math.floor(Math.random() * user.length)];
  res.send(randomUser);
};

//-------------------------------------------------------

module.exports.saveAUsers = (req, res) => {
  const newUser = req.body;
  let user = users;
  const newPostUser = user.push(newUser);

  fs.writeFile("users.json", JSON.stringify(user), function (err) {
    if (err) throw err;
    // console.log("complete");
  });

  res
    .status(200)
    .send({ success: true, InsertedId: user.length + 1, user: user });
};

//-------------------------------------------------------

module.exports.updateAUsers = (req, res) => {
  const id = req.params.id;
  const newUser = req.body;
  const name = newUser?.name;
  const gender = newUser?.gender;
  const contact = newUser?.contact;
  const address = newUser?.address;
  const photoUrl = newUser?.photoUrl;

  const user = users;
  let updateUser = user.find((u) => u.id == id);

  if (name) {
    updateUser.name = newUser?.name;
  }
  if (gender) {
    updateUser.gender = newUser?.gender;
  }
  if (contact) {
    updateUser.contact = newUser?.contact;
  }
  if (address) {
    updateUser.address = newUser?.address;
  }
  if (photoUrl) {
    updateUser.photoUrl = newUser?.photoUrl;
  }

  const itemIndex = user.findIndex((o) => o.id === updateUser.id);
  if (itemIndex > -1) {
    user[itemIndex] = updateUser;
  }

  fs.writeFile("users.json", JSON.stringify(user), function (err) {
    if (err) throw err;
    // console.log("complete");
  });

  res.status(200).send({ success: true, user: user });
};

//-----------------------------------------------------

module.exports.deleteAUsers = (req, res) => {
  const id = req.params.id;
  const newUser = req.body;
  const user = users;
  const deleteUser = user.filter((u) => u.id != id);
  console.log(deleteUser);
  fs.writeFile("users.json", JSON.stringify(deleteUser), function (err) {
    if (err) throw err;
    // console.log("complete");
  });
  res.status(200).send({ success: true, user: deleteUser });
};
