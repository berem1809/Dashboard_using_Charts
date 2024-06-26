// Services/tripServices.js
import Trip from '../Models/Trip.js';

export const fetchTripCounts = async () => {
    try {
        const totalTrips = await Trip.countDocuments();
        const cancelledTrips = await Trip.countDocuments({ status: false });
        const scheduledTrips = totalTrips - cancelledTrips;

        return {
            totalTrips,
            scheduledTrips,
            cancelledTrips
        };
    } catch (error) {
        throw new Error(`Failed to fetch trip counts: ${error.message}`);
    }
};

