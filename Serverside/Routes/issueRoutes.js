//Routes/issueRoutes.js

import express from 'express';
const router = express.Router();
import { getIssuesComparison } from '../Controllers/issueController.js'; // Correct path and import



router.get('/counts', getIssuesComparison);

export default router;