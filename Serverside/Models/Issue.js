//Models/Issue.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const issueSchema = new Schema({
    type: {
        type: String,
        enum: ['malfunction', 'accident'],
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    });

const Issue = mongoose.model("Issue", issueSchema);

export default Issue;
