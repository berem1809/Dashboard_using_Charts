//Models/Trip.js
import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        default: true // Default to scheduled (true)
    }
});

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;


