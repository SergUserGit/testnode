import express from "express";

import * as planetServices from "../../models/planets/index.js";

const planetRouter = express.Router();

planetRouter.get("/", (req, res) => {
  const result = planetServices.getAllPlanets();
  res.json(result);
});

/*planetRouter.get("/:id", (req, res) => {
  res.json(planets[0]);
});

planetRouter.post("/", (req, res) => {
  res.json(planets[0]);
});

planetRouter.put("/:id", (req, res) => {
  res.json(planets[0]);
});

planetRouter.delete("/:id", (req, res) => {
  res.json(planets[0]);
});
*/
function getPlanet() {
  return planets;
}

export default planetRouter;
