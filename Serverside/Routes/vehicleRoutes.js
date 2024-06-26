//Routes/vehicleRoutes.js
import express from 'express';
const router = express.Router();
import { getVehicles } from '../Controllers/vehicleController.js'; // Import as named export

router.get('/', getVehicles); // Use getVehicles directly

export default router;


