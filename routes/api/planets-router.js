import express from "express";

import * as planetServices from "../../models/planets/index.js";

import { httpError } from "../../helpers/index.js";

const planetRouter = express.Router();

planetRouter.get("/", async (req, res) => {
  try {
    const result = await planetServices.getAllPlanets();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

planetRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await planetServices.getAllPlanetsById(id);
    if (!result) {
      throw httpError(404, `Planet with ${id} not found`);
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

/*
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

export default planetRouter;
