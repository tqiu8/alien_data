    // /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    name: String,
    x: Number,
    y: Number
  },
  { timestamps: true },
  { collection: 'answers' }
);

// export the new Schema so we could modify it using Nodejs
module.exports = mongoose.model("Answers", DataSchema);
