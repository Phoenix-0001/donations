import { Prisma } from "@prisma/client";
import express, { Express, Request, Response } from "express";
const app: Express = express();
const cors = require("cors");
const router = express.Router();

router.post("/", (req, res) => {
  const body = req.body;
  const firstName = body.firstName;
  const lastName = body.lastName;
  const email = body.email;
  const password = body.password;
});

module.exports = router;
