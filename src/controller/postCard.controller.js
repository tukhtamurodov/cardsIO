import custonError from "../errorHanler/custonError.js";
import { read, write } from "../utils/IO.js";
import { extname, join } from "path";
export default async (req, res, next) => {
  const { name } = req.body;
  const image = req?.files?.image;
  if (!image) {
    return next(new custonError("Provide image", 400));
  }
  const cards = await read("cards.models.json").catch((err) =>
    next(new custonError(err.message, 500))
  );

  const imageName = Date.now().toString() + extname(image.name);
  image.mv(join(process.cwd(), "src", "uploads", imageName), (err) => {
    if (err) return next(new custonError(err.message, 500));
  });

  cards.push({
    id: cards?.at(-1)?.id || 1,
    name,
    image: "/uploads/" + imageName,
  });

  const response = await write("cards.models.json", cards).catch((err) =>
    next(new custonError(err.message, 500))
  );

  res.json("ok");
};
