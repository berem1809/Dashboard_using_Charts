// Routes/tripRoutes.js
import express from 'express';
import { getTripCounts } from '../Controllers/tripController.js'; // Correct path and import

const router = express.Router();

router.get('/counts', getTripCounts);

export default router;
