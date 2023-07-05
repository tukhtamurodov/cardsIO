import custonError from "../errorHanler/custonError.js";
import { read } from "../utils/IO.js";

export default async (req, res, next) => {
  const cards = await read("cards.odels.json").catch((err) => {
    if (err) next(new custonError("Can't read models of cards"));
  });

  res.render("index");
};
