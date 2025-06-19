import express from "express";
import Feedback from "../models/Feedback.js";
import { verifyToken } from "../utils/authMiddleware.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).json(feedback);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
