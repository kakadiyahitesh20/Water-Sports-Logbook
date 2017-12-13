/**
 * mongoose module to track contest details
 */
'use strict';

const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
	name: String,
	address: {
		street: {
	        type: String
	    },
	    city: {
	        type: String
	    },
	    state: {
	        type: String
	    },
	    zip: {
	        type: String
	    },
	    type: {
	        type: String
	    }
	},
	phone: String
}, {
	// add "created at" & "updated at" time stamps.
	timestamps: true
});
