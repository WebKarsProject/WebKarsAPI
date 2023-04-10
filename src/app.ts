import "express-async-errors";
import express, { Application } from "express";
import errorHandler from "./errors/errorHandler";
import cors from "cors";
import { userRoutes } from "./routers/user";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use(errorHandler);

app.use('/users', userRoutes)

export default app;
