import * as express from "express";
import routes from "./routes";

const app = express()
  .use(routes);

export default app;
