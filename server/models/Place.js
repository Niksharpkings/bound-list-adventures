const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const placeSchema = new Schema({
  
  description: {
    type: String,
  },
  placeId: {
    type: String,
    required: true,
  },
  placeName: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  image: {
    type: String,
  },
  attractionName:{
    type: String,
    required: true,
  },
  attractionType: {
    type: String,
  },
});

module.exports = placeSchema;
