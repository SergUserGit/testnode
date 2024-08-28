import express from "express";

import * as planetServices from "../../models/planets/index.js";

import { httpError } from "../../helpers/index.js";

const planetRouter = express.Router();

planetRouter.get("/", async (req, res, next) => {
  try {
    const result = await planetServices.getAllPlanets();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

planetRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await planetServices.getAllPlanetsById(id);
    if (!result) {
      throw httpError(404, `Planet with ${id} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default planetRouter;
