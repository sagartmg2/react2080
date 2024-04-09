const express = require("express");
var cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

let todos = ["html", "css", "js", "react"];

app.get("/api/todos", (req, res) => {
  res.send(todos);
});
app.post("/api/todos", (req, res) => {
  todos.push(req.body.title);
  res.send(todos);
});

app.listen(8000, () => {
  console.log("server started");
});
