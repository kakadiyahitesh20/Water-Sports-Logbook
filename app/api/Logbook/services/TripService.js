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

    /*  ---------------------------------------------------------------
            Update Trip
            Params: tripInfo and Id - the trip to Update
			Return: successful trip creation
			Effects: None;
        ---------------------------------------------------------------*/


    function updateTripInfo(updateTripInfo) {
        console.log("Start updateTripInfo ---->");
        return Trips.findOneAndUpdate({_id:updateTripInfo._id}, updateTripInfo);
    }

    /*  ---------------------------------------------------------------
         Remove trip by trip ID
         Params: Required, ID to remove trip info
         Return: None
         Effects: None;
     ---------------------------------------------------------------*/

    function removeTrip(tripId) {
        console.log("Start removeTrip ---->" +tripId);
        return Trips.findOneAndUpdate({_id : tripId},{'status':'Deleted'});
    }

    /*  ---------------------------------------------------------------
        Get trips List by Id
        Params: None
        Return: Trips list in JSON particular user
        Effects: None;
    ---------------------------------------------------------------*/

    function getTripsListById(userId) {
        console.log("Start getTripsListById ---->" +userId);
        return Trips.find({userId : userId});
    }



    return {
        createNewTrip,
        getTripList,
        updateTripInfo,
        removeTrip,
        getTripsListById,
    };

};