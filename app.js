let express = require("express");
let app = express();

app.get("/about", (request, response) => {
  response.sendFile("About page");
});

app.get("/", (request, response) => {
  response.send("Home Page");
});

module.exports = app;
