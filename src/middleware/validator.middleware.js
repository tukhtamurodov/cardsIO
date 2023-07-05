import custonError from "../errorHanler/custonError.js";

export default (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if (error) next(new custonError(error.message, 500));

    req.validValue = value;

    next();
  };
};
