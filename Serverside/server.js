import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
import errorHandler from "./Middlewares/errorMiddlewares.js";
import vehicleRoutes from "./Routes/vehicleRoutes.js";
import driverRoutes from "./Routes/driverRoutes.js";
import tripRoutes from "./Routes/tripRoutes.js";
import issueRoutes from "./Routes/issueRoutes.js";

// Load environment variables from .env file
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/issues", issueRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
