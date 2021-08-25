const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", function (req, res) {
  res.status(200).render("index.html");
});


app.listen(8080);
