/**
 * mongoose module to track contest details
 */
'use strict';

const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    Name: String,
    Email: String,
    dob: {
        type: Date
    },
	password: String
}, {
	// add "created at" & "updated at" time stamps.
	timestamps: true
});
