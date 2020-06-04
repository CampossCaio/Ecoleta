import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";

class App {
  server: any;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
