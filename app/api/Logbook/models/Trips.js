/**
 * mongoose module to track trips details
 */
'use strict';

const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    source : String,
    destination : String,
    departure:  {
        type: Date
    },
    arrival: {
        type: Date
    },
    transportType: String,
    status : String
},
    {
    // add "created at" & "updated at" time stamps.
    timestamps: true
});
