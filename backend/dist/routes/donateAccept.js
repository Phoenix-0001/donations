"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors = require("cors");
const router = express_1.default.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prisma = new client_1.PrismaClient();
        const donateItem = req.body.item; // Assuming the item property is directly accessible in the request body
        const donationRequired = yield prisma.donationItems.findMany({
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
        yield prisma.$disconnect(); // Closing Prisma client connection
        res.json(donationRequired);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(400).json({ error: "Internal Server Error" });
    }
}));
module.exports = router;
