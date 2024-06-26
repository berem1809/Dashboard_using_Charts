//Controllers/driverController.js

import asyncHandler from 'express-async-handler';
import driverService from '../Services/driverServices.js';

const getDriverCounts = asyncHandler(async (req, res) => {
  try {
    const counts = await driverService.getDriverCounts();
    res.json(counts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching driver counts' });
  }
});

export default getDriverCounts;




