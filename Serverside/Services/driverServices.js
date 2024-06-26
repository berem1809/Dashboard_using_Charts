//Services/driverServices.js
import Driver from '../Models/Driver.js';

const getDriverCounts = async () => {
    try {
      const noOfTotalDrivers = await Driver.countDocuments();
      const noOfAvailableDrivers = await Driver.countDocuments({ availability: true });
      const noOfUnavailableDrivers = noOfTotalDrivers - noOfAvailableDrivers;
  
      return {
        noOfTotalDrivers,
        noOfAvailableDrivers,
        noOfUnavailableDrivers
      };
    } catch (error) {
      throw new Error(`Failed to fetch driver counts: ${error.message}`);
    }
  };
  
  export default {
    getDriverCounts
  };