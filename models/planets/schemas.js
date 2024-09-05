import Joi from "joi";
import additDate from "../planets/additionalsDate.js";
import { Schema } from "mongoose";
import objHelpers from "../planets/helpers.js";

function getSchemaJoi() {
  const objValidate = objHelpers.getTypeValidationJoi(
    Joi,
    additDate.arrayZnZodiak
  );

  const planetAddSchema = Joi.object({
    innerId: Joi.string().required(),
    znakSun: objValidate.joiZnak,
    degrSun: objValidate.joiDegr,
    hoursSun: objValidate.joiHours,
    znakMoon: objValidate.joiZnak,
    degrMoon: objValidate.joiDegr,
    hoursMoon: objValidate.joiHours,
    znakMerk: objValidate.joiZnak,
    degrMerk: objValidate.joiDegr,
    hoursMerk: objValidate.joiHours,
    znakVener: objValidate.joiZnak,
    degrVener: objValidate.joiDegr,
    hoursVener: objValidate.joiHours,
    znakMars: objValidate.joiZnak,
    degrMars: objValidate.joiDegr,
    hoursMars: objValidate.joiHours,
    znakSaturn: objValidate.joiZnak,
    degrSaturn: objValidate.joiDegr,
    hoursSaturn: objValidate.joiHours,
    znakYupiter: objValidate.joiZnak,
    degrYupiter: objValidate.joiDegr,
    hoursYupiter: objValidate.joiHours,
    znakNeptun: objValidate.joiZnak,
    degrNeptun: objValidate.joiDegr,
    hoursNeptun: objValidate.joiHours,
    znakUran: objValidate.joiZnak,
    degrUran: objValidate.joiDegr,
    hoursUran: objValidate.joiHours,
    znakPluton: objValidate.joiZnak,
    degrPluton: objValidate.joiDegr,
    hoursPluton: objValidate.joiHours,
    znakHouseOne: objValidate.joiZnak,
    degrHouseOne: objValidate.joiDegr,
    hoursHouseOne: objValidate.joiHours,
    znakHouseTwo: objValidate.joiZnak,
    degrHouseTwo: objValidate.joiDegr,
    hoursHouseTwo: objValidate.joiHours,
    znakHouseThree: objValidate.joiZnak,
    degrHouseThree: objValidate.joiDegr,
    hoursHouseThree: objValidate.joiHours,
    znakHouseFour: objValidate.joiZnak,
    degrHouseFour: objValidate.joiDegr,
    hoursHouseFour: objValidate.joiHours,
    znakHouseFive: objValidate.joiZnak,
    degrHouseFive: objValidate.joiDegr,
    hoursHouseFive: objValidate.joiHours,
    znakHouseSix: objValidate.joiZnak,
    degrHouseSix: objValidate.joiDegr,
    hoursHouseSix: objValidate.joiHours,
    znakHouseSeven: objValidate.joiZnak,
    degrHouseSeven: objValidate.joiDegr,
    hoursHouseSeven: objValidate.joiHours,
    znakHouseEight: objValidate.joiZnak,
    degrHouseEight: objValidate.joiDegr,
    hoursHouseEight: objValidate.joiHours,
    znakHouseNine: objValidate.joiZnak,
    degrHouseNine: objValidate.joiDegr,
    hoursHouseNine: objValidate.joiHours,
    znakHouseTen: objValidate.joiZnak,
    degrHouseTen: objValidate.joiDegr,
    hoursHouseTen: objValidate.joiHours,
    znakHouseElewen: objValidate.joiZnak,
    degrHouseElewen: objValidate.joiDegr,
    hoursHouseElewen: objValidate.joiHours,
    znakHouseTwelve: objValidate.joiZnak,
    degrHouseTwelve: objValidate.joiDegr,
    hoursHouseTwelve: objValidate.joiHours,
    znakHouseLilit: objValidate.joiZnak,
    degrHouseLilit: objValidate.joiDegr,
    hoursHouseLilit: objValidate.joiHours,
    znakHouseLunarNode: objValidate.joiZnak,
    degrHouseLunarNode: objValidate.joiDegr,
    hoursHouseLunarNode: objValidate.joiHours,
  });

  return planetAddSchema;
}

function getSchemaMongo() {
  const objValidate = objHelpers.getTypeValidationMongo(
    additDate.arrayZnZodiak
  );

  const planetSchema = new Schema(
    {
      innerId: { type: String, required: true },
      znakSun: objValidate.objZnak,
      degrSun: objValidate.objDegr,
      hoursSun: objValidate.objHours,
      znakMoon: objValidate.objZnak,
      degrMoon: objValidate.objDegr,
      hoursMoon: objValidate.objHours,
      znakMerk: objValidate.objZnak,
      degrMerk: objValidate.objDegr,
      hoursMerk: objValidate.objHours,
      znakVener: objValidate.objZnak,
      degrVener: objValidate.objDegr,
      hoursVener: objValidate.objHours,
      znakMars: objValidate.objZnak,
      degrMars: objValidate.objDegr,
      hoursMars: objValidate.objHours,
      znakSaturn: objValidate.objZnak,
      degrSaturn: objValidate.objDegr,
      hoursSaturn: objValidate.objHours,
      znakYupiter: objValidate.objZnak,
      degrYupiter: objValidate.objDegr,
      hoursYupiter: objValidate.objHours,
      znakNeptun: objValidate.objZnak,
      degrNeptun: objValidate.objDegr,
      hoursNeptun: objValidate.objHours,
      znakUran: objValidate.objZnak,
      degrUran: objValidate.objDegr,
      hoursUran: objValidate.objHours,
      znakPluton: objValidate.objZnak,
      degrPluton: objValidate.objDegr,
      hoursPluton: objValidate.objHours,
      znakHouseOne: objValidate.objZnak,
      degrHouseOne: objValidate.objDegr,
      hoursHouseOne: objValidate.objHours,
      znakHouseTwo: objValidate.objZnak,
      degrHouseTwo: objValidate.objDegr,
      hoursHouseTwo: objValidate.objHours,
      znakHouseThree: objValidate.objZnak,
      degrHouseThree: objValidate.objDegr,
      hoursHouseThree: objValidate.objHours,
      znakHouseFour: objValidate.objZnak,
      degrHouseFour: objValidate.objDegr,
      hoursHouseFour: objValidate.objHours,
      znakHouseFive: objValidate.objZnak,
      degrHouseFive: objValidate.objDegr,
      hoursHouseFive: objValidate.objHours,
      znakHouseSix: objValidate.objZnak,
      degrHouseSix: objValidate.objDegr,
      hoursHouseSix: objValidate.objHours,
      znakHouseSeven: objValidate.objZnak,
      degrHouseSeven: objValidate.objDegr,
      hoursHouseSeven: objValidate.objHours,
      znakHouseEight: objValidate.objZnak,
      degrHouseEight: objValidate.objDegr,
      hoursHouseEight: objValidate.objHours,
      znakHouseNine: objValidate.objZnak,
      degrHouseNine: objValidate.objDegr,
      hoursHouseNine: objValidate.objHours,
      znakHouseTen: objValidate.objZnak,
      degrHouseTen: objValidate.objDegr,
      hoursHouseTen: objValidate.objHours,
      znakHouseElewen: objValidate.objZnak,
      degrHouseElewen: objValidate.objDegr,
      hoursHouseElewen: objValidate.objHours,
      znakHouseTwelve: objValidate.objZnak,
      degrHouseTwelve: objValidate.objDegr,
      hoursHouseTwelve: objValidate.objHours,
      znakHouseLilit: objValidate.objZnak,
      degrHouseLilit: objValidate.objDegr,
      hoursHouseLilit: objValidate.objHours,
      znakHouseLunarNode: objValidate.objZnak,
      degrHouseLunarNode: objValidate.objDegr,
      hoursHouseLunarNode: objValidate.objHours,
    },
    { versionKey: false }
  );

  planetSchema.post("save", objHelpers.mongoHooks);

  planetSchema.post("findOneAndUpdate", objHelpers.mongoHooks);

  return planetSchema;
}

const schemasObj = {
  planetAddSchema: getSchemaJoi(),
  planetAddSchemaMongo: getSchemaMongo(),
};

export default schemasObj;
