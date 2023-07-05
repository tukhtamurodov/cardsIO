import custonError from "../errorHanler/custonError.js";
import { read } from "../utils/IO.js";

export default async (req, res, next) => {
  const cards = await read("cards.models.json").catch((err) => {
    if (err) return next(new custonError("Can't read models of cards"));
  });
  return res.render("index", { cards });
};
