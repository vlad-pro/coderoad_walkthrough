const express = require("express");

const app = express();

console.log("Hello World");

const server = app.listen(process.env.PORT || 3000);

app.get("/", handler);

function handler(req, res) {
  res.send("Hello Express");
}

// -- DO NOT EDIT BELOW THIS LINE

module.exports = server;
