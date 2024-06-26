//Controllers/vehicleController.js
import asyncHandler from 'express-async-handler';
import { getVehicleCounts } from '../Services/vehicleServices.js';

// Fetch all vehicles
export const getVehicles = asyncHandler(async (req, res) => {
  try {
    const { totalVehicles, inServiceVehicles, outOfServiceVehicles } = await getVehicleCounts();
    res.status(200).json({
      vehicles: {
        total: totalVehicles,
        inService: inServiceVehicles,
        outOfService: outOfServiceVehicles,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
