// Models/Driver.js
import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
    id: {
        type: String,
        //required: false,
        unique: true,
    },
    availability: {
        type: Boolean,
        required: true,
      },

  // other fields as needed
});

const Driver = mongoose.model('Driver', driverSchema);

export default Driver;
