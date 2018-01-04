"use strict";

const cors = require('hapi-cors');

module.exports = function (server, options, controllers, components) {

    // USER CONTROLLER

	const {UserCtrl} = controllers;
	const {CreateUser} = components.schema;
	const {GetUserList} = components.schema;
    const {CheckUsersLogin} = components.schema;


    // TRIP CONTROLLER

    const {TripCtrl} = controllers;
    const {CreateNewTrips} = components.schema;
    const {GetTripsList} = components.schema;
    const {UpdateTripInfo} = components.schema;
    const {RemoveTrip} = components.schema;
    const {GetTripsListById} = components.schema;

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
        {
            method: "GET",
            path: "/checkUserLogin/{email}/{password}",
            config:
                {
                    handler: UserCtrl.usersLoginCheck,
                    description: "Check user login in DB",
                    tags: ["api"],
                    validate: CheckUsersLogin
                }
        },
        {
            method: "POST",
            path: "/createNewTrip",
            config:
                {
                    handler: TripCtrl.createNewTrip,
                    description: "Create a new trip in the DB",
                    tags: ["api"],
                    validate: CreateNewTrips
                }
        },
        {
            method: "GET",
            path: "/getTripsList",
            config:
                {
                    handler: TripCtrl.getTripsList,
                    description: "Get a trips list from DB",
                    tags: ["api"],
                    validate: GetTripsList
                }
        },
        {
            method: "GET",
            path: "/getTripsListById/{userId}",
            config:
                {
                    handler: TripCtrl.getTripsListById,
                    description: "Get a trips by user Id from DB",
                    tags: ["api"],
                    validate: GetTripsListById
                }
        },
        {
            method: "POST",
            path: "/updateTripInfo",
            config:
                {
                    handler: TripCtrl.updateTripInfo,
                    description: "Update trip info in the DB",
                    tags: ["api"],
                    validate: UpdateTripInfo
                }
        },
        {
            method: "POST",
            path: "/removeTrip/{tripId}",
            config:
                {
                    handler: TripCtrl.removeTrip,
                    description: "Remove trip in the DB",
                    tags: ["api"],
                    validate: RemoveTrip
                }
        }
	];
};
