import { Router } from "express";
import cardsRoute from "./cards.route.js";

const routes = Router();
routes.use([cardsRoute]);
export default routes;
