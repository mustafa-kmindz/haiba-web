const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5111;

app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, ".")));

app.listen(port, () => {
  console.log(`Haiba website available at http://localhost:${port}`);
});
