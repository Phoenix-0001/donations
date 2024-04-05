import express, { Express, Request, Response } from "express";
const signUpRouter = require("./routes/signup");
const app: Express = express();
const cors = require("cors");
const port = 3000;
app.use(cors());
app.use(express.json());

app.use("/signup", signUpRouter);

app.listen(port);
