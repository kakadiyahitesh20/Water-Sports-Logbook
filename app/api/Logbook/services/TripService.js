"use strict";

//const co = require("co");


module.exports = function (server, options, components) {

    const {
        Trips
    } = components.models;



    /*  ---------------------------------------------------------------
            Create New Trip
            Params: tripInfo - the trip to create
			Return: successful trip creation
			Effects: None;
        ---------------------------------------------------------------*/

    function createNewTrip(tripInfo) {
        console.log("createNewTrip");
        console.log(tripInfo);
        return Trips.create(tripInfo);
    }

    /*  ---------------------------------------------------------------
            Get trips List
            Params: None
            Return: Trips list in JSON
            Effects: None;
        ---------------------------------------------------------------*/

    function getTripList() {
        console.log("Start getTripsList ---->");
        return Trips.find();
    }


    return {
        createNewTrip,
        getTripList
    };

};
