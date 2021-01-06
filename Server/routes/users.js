var express = require("express");
var router = express.Router();
var axios = require("axios");
const apiURL = "https://swapi.dev/api/";

function callApiWithEndpoint(endpoint) {
  axios
    .get(apiURL + endpoint)
    .then((res) => {
      console.log(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
}

callApiWithEndpoint("people");
callApiWithEndpoint("starships");
callApiWithEndpoint("planets");
callApiWithEndpoint("vehicles");
callApiWithEndpoint("films");
callApiWithEndpoint("species");

module.exports = router;
