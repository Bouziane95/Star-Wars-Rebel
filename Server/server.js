const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.get("https://swapi.dev/api/films", (req, res) => {
  console.log(res);
});

app.get("https://swapi.dev/api/people", (req, res) => {
  console.log(res);
});

app.get("https://swapi.dev/api/planets", (req, res) => {
  console.log(res);
});

app.get("https://swapi.dev/api/species", (req, res) => {
  console.log(res);
});

app.get("https://swapi.dev/api/starships", (req, res) => {
  console.log(res);
});

app.get("https://swapi.dev/api/vehicles", (req, res) => {
  console.log(res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
