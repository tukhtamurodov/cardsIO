import { STATUS_CODES } from "http";
export default (err, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    return res.render("error", {
      message: err.message,
      status: err.status,
    });
  }

  if (process.env.NODE_ENV === "production") {
    return res.render("error", {
      message: STATUS_CODES[err.status],
      status: err.status,
    });
  }
};
