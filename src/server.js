const express = require("express", "path");
const path = require("path");
const app = express();

console.log("Hello World");

const server = app.listen(process.env.PORT || 3000);

app.get("/", fileHandler);

function handler(req, res) {
  res.send("Hello Express");
}

function fileHandler(req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
}

// -- DO NOT EDIT BELOW THIS LINE

module.exports = server;
