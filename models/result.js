const mongoose = require('mongoose');

// Define the schema
const resultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

// Create the model
const Result = mongoose.model('Result', resultSchema);

// Export the model
module.exports = Result;
