const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
var path          = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, ".")));

// this will start the server
app.listen(5111, () =>
  console.log("Ready to get received on: http://localhost:3000/index.html")
);
