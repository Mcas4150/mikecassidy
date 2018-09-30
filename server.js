const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (!req.secure && req.headers["x-forwarded-proto"] !== "https") {
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    next();
  }
});

app.use(express.static(path.resolve(__dirname + "/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/build/index.html"));
});

app.listen(PORT, () => console.log(`App started on ${PORT}`));
