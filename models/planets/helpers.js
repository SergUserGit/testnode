const mongoHooks = (error, data, next) => {
  error.status = 400;
  next();
};

function getTypeValidationJoi(Joi, arrayZnZodiak) {
  const joiZnak = Joi.string()
    .valid(...arrayZnZodiak)
    .required();
  const joiDegr = Joi.number().min(0).max(29).required();
  const joiHours = Joi.number().min(0).max(59).required();
  return {
    joiZnak,
    joiDegr,
    joiHours,
  };
}

function getTypeValidationMongo(arrayZnZodiak) {
  const objZnak = {
    type: String,
    enum: [...arrayZnZodiak],
  };

  const objDegr = {
    type: Number,
    min: 0,
    max: 29,
  };

  const objHours = {
    type: Number,
    min: 0,
    max: 59,
  };

  return {
    objZnak,
    objDegr,
    objHours,
  };
}

const objHelpers = {
  mongoHooks,
  getTypeValidationJoi,
  getTypeValidationMongo,
};

export default objHelpers;
