"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signUpRouter = require("./routes/signup");
const app = (0, express_1.default)();
const cors = require("cors");
const port = 3000;
app.use(cors());
app.use(express_1.default.json());
app.use("/signup", signUpRouter);
app.listen(port);
