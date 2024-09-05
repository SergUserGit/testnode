import schemasObj from "../../models/planets/schemas.js";
import objStatuts from "../api/http-statuts.js";

function getStatusEmptyBody(bodyLength, res) {
  if (!bodyLength) {
    return objStatuts.getStatus(400, "All fields empty", res);
  } else {
    return true;
  }
}

function getErrorByValidationBody(req, res) {
  const { error } = schemasObj.planetAddSchema.validate(req.body);
  if (error) {
    return objStatuts.getStatus(400, error.message, res);
  } else {
    return true;
  }
}

function getStatusNotFoundById(result, id, res) {
  if (!result) {
    return objStatuts.getStatus(404, `Planet with ${id} not found`, res);
  } else {
    return true;
  }
}

const objHelpers = {
  getStatusEmptyBody,
  getErrorByValidationBody,
  getStatusNotFoundById,
};

export default objHelpers;
