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
        userId: Joi.objectId().description("The ID of the user associated to the user.").example("58c1cb5bcc4253b553f28d16").required(),
        source: Joi.string().min(3).max(60),
        destination: Joi.string().min(3).max(60),
        departure: Joi.date(),
        arrival: Joi.date(),
        transportType: Joi.string().min(3).max(60),
        _id: Joi.objectId().required(),
        status: Joi.string(),
    }
};

