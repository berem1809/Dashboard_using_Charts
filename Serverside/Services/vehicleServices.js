//Services/vehicleService.js
import Vehicle from '../Models/Vehicle.js';

// Function to fetch counts of vehicles
const getVehicleCounts = async () => {
  try {
    const totalVehicles = await Vehicle.countDocuments();
    const inServiceVehicles = await Vehicle.countDocuments({ availability: true });

    return {
      totalVehicles,
      inServiceVehicles,
      outOfServiceVehicles: totalVehicles - inServiceVehicles,
    };
  } catch (error) {
    throw new Error(`Failed to fetch vehicle counts: ${error.message}`);
  }
};

export { getVehicleCounts };
