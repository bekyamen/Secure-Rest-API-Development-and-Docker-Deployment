import express from "express";
import authRoutes from "./routes/auth.routes.js";
import customerRoutes from "./routes/customer.routes.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/customers", customerRoutes);

export default app;
