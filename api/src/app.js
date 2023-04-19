import express from "express";
import cors from "cors";
import compression from "compression";
import routes from "./routes/routes.js";
import { handdleError } from "./app/middlewares/handdleError.js";
import "./config/database.js";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(cors());
    this.server.use(compression());
    this.server.use(express.json({ limit: "500mb" }));
  }
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
