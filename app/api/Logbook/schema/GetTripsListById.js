"use strict";

const Joi = require("joi");

module.exports = {

    headers: Joi.object({
        'api-key': Joi.string().required()
            .description("Api Key of the api")
    }).options({
        allowUnknown: true
    }),


    params: Joi.object({
        userId: Joi.objectId().example("5979138fde7a573604902c5b").description("The internal ID of the User").required(),
    })

};