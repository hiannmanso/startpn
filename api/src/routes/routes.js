import { Router } from "express";
import ControllerUsers from "../app/controllers/ControllerUser.js";

const routes = Router();

//  ACCOUNT
routes.post("/signup", () => ControllerUsers.storage);

export default routes;
