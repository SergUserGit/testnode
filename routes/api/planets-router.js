import express from "express";
import funcObject from "../api/controllers.js";

const planetRouter = express.Router();

planetRouter.get("/", funcObject.getElements);
planetRouter.get("/:id", funcObject.getElementById);
planetRouter.post("/", funcObject.addElement);
planetRouter.delete("/:id", funcObject.deleteElementById);
planetRouter.put("/:id", funcObject.updateElementById);

export default planetRouter;
