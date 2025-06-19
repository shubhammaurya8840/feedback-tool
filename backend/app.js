import express from "express";
import cors from "cors";
import morgan from "morgan";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/feedback", feedbackRoutes);
app.use("/api/admin", adminRoutes);

export default app;
