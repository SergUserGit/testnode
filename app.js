import express from "express";

import planets from "./planets.js";

const app = express();

app.get("/planets", getArrayPlanet);

/*app.get("/", routOne);
app.get("/astrology", routTwo);*/

app.listen(3000, () => console.log("Server is runningn"));

function getArrayPlanet(req, res) {
  res.send(planets);
}

/*function routOne(request, response) {
  response.send("<h2>My page</h2>");
}

function routTwo(request, response) {
  console.log(request.url);
  console.log(request.method);
  response.send("<h2>Astrology page</h2>");
}*/
