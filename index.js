const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Server is running successfully!",
    date: new Date(),
  });
});

app.listen(3000, () => {
  console.log("Test CI/CD");
});
