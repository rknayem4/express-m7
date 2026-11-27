import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import dotenv from "dotenv";
import { userRoute } from "./modules/users/user.route.js";
import { profileRoute } from "./modules/profile/profile.route.js";

dotenv.config();
const app: Application = express();
// const port = config.port

app.use(express.json());
app.use(express.text());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/profile", profileRoute);

app.get("/", (req: Request, res: Response) => {
  // console.log(req)
  res.status(200).json({
    success: true,
    message: "This is root route",
    author: "PH",
  });
});



export default app;
