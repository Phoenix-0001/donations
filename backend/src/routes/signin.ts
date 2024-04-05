import { Prisma, PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";
const app: Express = express();
const cors = require("cors");
const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;

  const prisma = new PrismaClient();
  const userExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!userExist)
    return res.status(404).json({ mess: "The user doesn't exist" });
  if (!(userExist?.password === password))
    return res.status(404).json({ mess: "user not found!" });
  res.status(200).json(userExist);
});
module.exports = router;
