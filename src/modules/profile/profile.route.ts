import { Router } from "express";
import { profileController } from "./profile.controller.js";

const route = Router();

route.post("/", profileController.createUser);

export const profileRoute = route;
