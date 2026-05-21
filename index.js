const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 App deployed via CI/CD | Server | 2");
});

app.listen(3000, () => {
  console.log("Test CI/CD");
});
