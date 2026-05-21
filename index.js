const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 App deployed from local machine");
});

app.listen(3000, () => {
  console.log("Test CI/CD");
});
