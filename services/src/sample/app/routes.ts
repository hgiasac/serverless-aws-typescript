import { Router } from "express";
import { hello } from "./hello";

const routes = Router();

routes.get("/sample", hello);

export default routes;
