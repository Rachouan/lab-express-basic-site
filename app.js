const express = require("express");

const app = express();

app.use(express.static("public"));

let port = 3000;
app.listen(port, () =>
  console.log(`App listening on port ${port}! http://localhost:${port}/`)
);

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/work", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});
