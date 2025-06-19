import express from "express";
import cors from "cors";
import feedbackRoutes from "./routes/feedback.js";
import adminRoutes from "./routes/admin.js";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Mount the routes properly
app.use("/api/feedback", feedbackRoutes);
app.use("/api/admin", adminRoutes);

export default app;
