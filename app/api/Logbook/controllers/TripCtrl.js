"use strict";

module.exports = function (server, options, services) {

    const {TripService} = services;

    /* Helpers */

    let errorHandling = _.curry(
        function errorHandling(reply, err) {
            server.log("error", err);
            reply(err);
        }
    );

    return {

        createNewTrip: function (request, reply) {
            console.log("TripCtrl --> createNewTrip");
            // Call the trips service to create new trip
            TripService.createNewTrip(request.payload)
                .then(reply)
                .catch(errorHandling(reply));
        },

        getTripsList: function (request, reply) {
            console.log("TripCtrl --> getTripsList");
            // Call the trips service to get a specific trip list

            TripService.getTripList()
                .then(tripsList => {
                TripService.getTripsBoat1Count()
                .then(tripsListBoat1Count => {
                TripService.getTripsBoat2Count()
                .then(tripsListBoat2Count => {
                reply({results: tripsList, Boat1count: tripsListBoat1Count, Boat2count: tripsListBoat2Count});
        })
        })
        })
        .catch(errorHandling(reply));

           /* TripService.getTripList()
                .then(tripsList => {
                reply(tripsList);
        })*/
        },


        getTripsListById: function (request, reply) {
            console.log("TripCtrl --> getTripsListById");
            // Call the trip service to get a specific trip list by id
            TripService.getTripsListById(request.params.userId)
                .then(tripListByUser => {
                reply(tripListByUser);
        })
        },

        updateTripInfo: function (request, reply) {
            console.log("TripCtrl --> updateTripInfo");
            // Call the trip service to update a specific trip
            TripService.updateTripInfo(request.payload)
                .then(reply)
                .catch(errorHandling(reply));
        },

        removeTrip: function (request, reply) {
            console.log("TripCtrl --> removeTrip");
            // Call the trip service to remove a specific trip
            TripService.removeTrip(request.params.tripId)
                .then(reply)
                .catch(errorHandling(reply));
        },

    };

};
