var express = require("express");
var router = express.Router();
var axios = require("axios");
const apiURL = "https://swapi.dev/api/";
const app = express();

function callApiWithEndpoint(endpoint) {
  axios
    .get(apiURL + endpoint)
    .then((res) => {
      // console.log(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
}

/* GET home page. */
router.get("/", function (req, res) {
  res.send({express: 'Hello from express'});
});

module.exports = router;
