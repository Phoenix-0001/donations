import { Prisma, PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";
const app: Express = express();
const cors = require("cors");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const donateItem = req.body.item; // Assuming the item property is directly accessible in the request body
    const donationRequired = await prisma.donationItems.findMany({
      where: {
        item: {
          contains: donateItem, // Using Prisma's query builder to prevent SQL injection
        },
      },
      select: {
        item: true,
        Community: true,
        person: true,
        need: true,
      },
    });
    await prisma.$disconnect(); // Closing Prisma client connection
    res.json(donationRequired);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
