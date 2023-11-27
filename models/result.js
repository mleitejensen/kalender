const mongoose = require('mongoose');

// Define the schema
const resultSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  answer: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  }
});

// Create the model
const Result = mongoose.model('Result', resultSchema);

// Export the model
module.exports = Result;
