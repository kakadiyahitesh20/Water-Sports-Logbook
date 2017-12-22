"use strict";

const cors = require('hapi-cors');

module.exports = function (server, options, controllers, components) {

	const {UserCtrl} = controllers;
	const {CreateUser} = components.schema;
	const {GetUserList} = components.schema


    var corsHeaders = {
        origin: ["*"],
        headers: ["Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,cache-control,pragma,'X-Auth-Token', 'X-CSRF-TOKEN'"],
        credentials: true
    };
	return [
		{
			method: "POST",
			path: "/createNewUser",
			config:
			{
				handler: UserCtrl.createNew,
				description: "Create a new User in the DB",
				tags: ["api"],
				validate: CreateUser
			}
    	},
        {
            method: "GET",
            path: "/getUsersList",
            config:
                {
                    handler: UserCtrl.getUsersList,
                    description: "Get users list from DB",
                    tags: ["api"],
                    validate: GetUserList
                }
        },
	];
};
