import express from "express";
import { sendMessage, signup } from "../controller/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
router.post("/signup", signup);

export default router;
