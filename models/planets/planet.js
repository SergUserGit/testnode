import { model } from "mongoose";
import schemasObj from "../planets/schemas.js";

const Planet = model("planet-table", schemasObj.planetAddSchemaMongo);
export default Planet;
