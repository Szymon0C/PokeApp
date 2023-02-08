const express = require("express");
require("dotenv").config();
const { port } = require("./config");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");

const app = express();

//db
require("./db/mongoose");

// parser
app.use(bodyParser.json());

// routes
app.use("/api/", apiRouter);

// server
app.listen(port, function () {
  console.log("Server is listening... http://localhost:" + port);
});
