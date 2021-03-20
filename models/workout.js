const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining Schema
const workoutSchema = new Schema({
    day: {
      type: Date,
      default: () => new Date ()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Please choose an exercise type',
        },
        name: {
            type: String,
            trim: true,
            required: 'Please select an exercise',
        },
        duration:{
            type: Number,
            required: 'How long did you exercise?'
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets:{
            type: Number,
        },
        distance:{
            type: Number,
        },
    }]
  
    
  });
  
//   name in actual db, Schema that it comes from
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;