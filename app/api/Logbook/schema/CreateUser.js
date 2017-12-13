"use strict";

const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {

	headers: Joi.object({
		'api-key': Joi.string().required()
			.description("Api Key of the api")
	}).options({
		allowUnknown: true
	}),

	payload: {
		Name: Joi.string().min(3).max(60).required(),
		Email: Joi.string().min(3).max(60).required(),
		dob: Joi.date().required(),
		password: Joi.date().required(),
	}

};

/*
{
	"contestName": 'SAMPLE ONE',
	"startDate": "2017-01-01",
	"endDate": "2018-01-01",
	"partnerId": 'ObjectId("58c1cb5bcc4253b553f28d16")',
	"thankYouText": 'Sample Thank you Text'
}

{
contestName (string),
startDate (string),
endDate (string),
partnerId (string),
thankYouText (string, optional)
}
*/
