const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema (
    {
        // season: { type: Number, required: true },
        date: { type: Date },
        day: { type: Number, required: true },
        tempHiLo: { type: Number },
        weatherIcon: { type: String, enum: ['Sunny', 'Partly Sunny', 'Cloudy', 'Snowing', 'Raining', 'Sleeting'], default: 'Partly Sunny'},
        who: { type: String },
        mountain: { type: String },
        notes: { type: String, default: 'flowy' },
    },
    {
        timestamps: true,
    }
); 

// Why is Session capitalized?
module.exports = mongoose.model('Session', sessionSchema);