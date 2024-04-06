"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signUpRouter = require("./routes/signup");
const signInRouter = require("./routes/signin");
const signInRouterComm = require("./routes/communitySignin");
const getReciver = require("./routes/donateAccept");
const postReq = require("./routes/reqComm");
const app = (0, express_1.default)();
const cors = require("cors");
const port = 3000;
app.use(cors());
app.use(express_1.default.json());
app.use("/signup", signUpRouter);
app.use("/signin", signInRouter);
app.use("/donate", getReciver);
app.use("/signincomm", signInRouterComm);
app.use("/reqitem", postReq);
app.listen(port);
