const mongoose = require('mongoose');

// Define the schema
const resultSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true,
  }
});

resultSchema.index({ email: 1, date: 1 }, { unique: true});
// Create the model
const Result = mongoose.model('Result', resultSchema);

// Export the model
module.exports = Result;
