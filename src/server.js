import express from "express";
import "dotenv/config";
import fileUpload from "express-fileupload";
import path from "path";
import routes from "./routes/index.js";
import { STATUS_CODES } from "http";
import errorHanligMidleware from "./middleware/error.hanlig.midleware.js";
const PORT = process.env.PORT || 9090;

const app = express();

app.use(express.urlencoded());
app.use(fileUpload());
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));
app.use("/uploads", express.static(path.join(process.cwd(), "src")));

app.use(routes);
app.use(errorHanligMidleware)
app.listen(PORT, console.log(PORT));
