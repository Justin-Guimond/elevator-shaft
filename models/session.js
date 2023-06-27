const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema (
    {
        date: { type: Date },
        day: { type: Number, required: true },
        tempHi: { type: Number },
        weather: { type: String, enum: ['Sunny', 'Partly Sunny', 'Cloudy', 'Snowing', 'Raining', 'Sleeting'] },
        who: { type: String },
        mountain: { type: String },
        wind: { type: Number },
        notes: { type: String, default: 'Flowy' },
    },
    {
        timestamps: true,
    }
); 

// Why is Session capitalized?
module.exports = mongoose.model('Session', sessionSchema);