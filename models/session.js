const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema (
    {
        season: { type: Number, required: true },
        date: { type: Date, required: true }, /*how to include a calendar pop up when clicking this field?*/
        day: { type: Number, required: true },
        tempHi: { type: Number },
        tempLo: { type: Number },
        weatherIcon: { type: String, enum: ['Sunny', 'Partly Sunny', 'Cloudy', 'Snowing', 'Raining', 'Sleeting']}, /* change type to image and enter weather icon url's? */
        who: { type: String },
        mountain: { type: String },
        notes: { type: String },
    },
    {
        timestamps: true,
    }
); 

// Why is Session capitalized?
module.exports = mongoose.model('Session', sessionSchema);