import { Prisma, PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";
const app: Express = express();
const cors = require("cors");
const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  const firstName = body.firstName;
  const lastName = body.lastName;
  const email = body.email;
  const password = body.password;

  const prisma = new PrismaClient();
  const userExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (userExist) return res.status(403).json({ mess: "User already exists" });
  const createUser = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });
  if (!createUser) return res.status(400).json("Erro while making the user!");
  res.status(200).json(body);
});
module.exports = router;
