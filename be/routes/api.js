const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  saveUser,
  updateUser,
  getUser,
} = require("../actions/api/userActions");

router.get("/users", getAllUsers);

router.get("/users/:id", getUser);

router.post("/users", saveUser);

router.put("/users/:id", updateUser);

module.exports = router;
