import Planet from "../../models/planets/planet.js";
import objHelpers from "../api/helpers.js";

const getElements = async (req, res, next) => {
  try {
    const result = await Planet.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getElementById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Planet.findOne({ innerId: id });
    const resultFindById = objHelpers.getStatusNotFoundById(result, id, res);
    if (resultFindById === true) {
      res.json(result);
    }
  } catch (error) {
    next(error);
  }
};

const addElement = async (req, res, next) => {
  try {
    const bodyEmpty = objHelpers.getStatusEmptyBody(
      Object.keys(req.body).length,
      res
    );
    if (bodyEmpty === true) {
      const errorOfValidate = objHelpers.getErrorByValidationBody(req, res);
      if (errorOfValidate === true) {
        const resultObject = await Planet.create(req.body);
        res.status(201).json(resultObject);
      }
    }
  } catch (error) {
    next(error);
  }
};

const deleteElementById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Planet.findOneAndDelete({ innerId: id });
    const resultFindById = objHelpers.getStatusNotFoundById(result, id, res);
    if (resultFindById === true) {
      res.json({
        message: "Delete success",
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateElementById = async (req, res, next) => {
  try {
    const bodyEmpty = objHelpers.getStatusEmptyBody(
      Object.keys(req.body).length,
      res
    );
    if (bodyEmpty === true) {
      const errorOfValidate = objHelpers.getErrorByValidationBody(req, res);
      if (errorOfValidate === true) {
        const { id } = req.params;
        const result = await Planet.findOneAndUpdate(
          { innerId: id },
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        const resultFindById = objHelpers.getStatusNotFoundById(
          result,
          id,
          res
        );
        if (resultFindById === true) {
          res.json(result);
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

const funcObject = {
  getElements,
  getElementById,
  addElement,
  deleteElementById,
  updateElementById,
};

export default funcObject;
