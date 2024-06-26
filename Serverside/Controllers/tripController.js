// Controller/tripController.js
import asyncHandler from 'express-async-handler';
import { fetchTripCounts } from '../Services/tripServices.js';

export const getTripCounts = asyncHandler(async (req, res) => {
    try {
        const { totalTrips, scheduledTrips, cancelledTrips } = await fetchTripCounts();
        res.status(200).json({
            trips: {
                totalTrips,
                scheduledTrips,
                cancelledTrips,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
