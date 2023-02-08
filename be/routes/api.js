const express = require("express");
const router = express.Router();

const { getAllUsers, saveUser } = require("../actions/api/userActions");

router.get("/users", getAllUsers);
router.post("/users", saveUser);

module.exports = router;
