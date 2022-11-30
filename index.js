const bodyParser = require("body-parser");
const express = require("express");

const app = express();

console.log("index start");

app.use(bodyParser.json([]));

app.use(bodyParser.urlencoded([]));

app.get("/api/", (req, res) => {
  return res.send("app home page");
});

app.get("/api/todo", (req, res) => {
  return res.send([{title: "hello"},{title: "world" }]);
});

app.post("/api/todo", (req, res) => {
  console.log(req.body);
  return res.send("posted");
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
