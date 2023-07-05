import { Router } from "express";
import getCardsController from "../controller/getCards.controller.js";
import postCardController from "../controller/postCard.controller.js";
import validatorMiddleware from "../middleware/validator.middleware.js";
import schema from "../errorHanler/schema.js";

const cardsRoute = Router();

cardsRoute.get("/", getCardsController);
cardsRoute.post("/card", validatorMiddleware(schema), postCardController);
export default cardsRoute;
