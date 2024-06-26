//Models/Vehicle.js
import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  
  availability: {
    type: Boolean,
    required: true,
    default: true,
  },
 
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;