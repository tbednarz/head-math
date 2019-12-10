const express = require("express");
const path = require("path");
const api = require("../public/numbers");

const app = express();

const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "../public");

app.use(express.static(publicDir));
api.getData();

app.get("", (req, res) => {
  res.render("index", {});
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
