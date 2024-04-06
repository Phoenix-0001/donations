import { Prisma, PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  const community = "binary brigade";
  const person = req.body.person;
  const item = req.body.item;
  const need = req.body.need;
  console.log(req.body);
  const prisma = new PrismaClient();
  const createReq = await prisma.donationItems.create({
    data: {
      item,
      Community: community,
      person,
      need,
    },
  });
  if (!createReq) return res.status(402).json({ mess: "Something happened!" });
  res.status(200).json({ mess:"This is cool"});
});

module.exports = router;
