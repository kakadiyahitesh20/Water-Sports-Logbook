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
            TripService.createNewTrip(request.payload)
                .then(reply)
                .catch(errorHandling(reply));
        },

        getTripsList: function (request, reply) {
            console.log("TripCtrl --> getTripsList");
            // Call the trips service to get a specific trip list
            TripService.getTripList()
                .then(tripsList => {
                reply(tripsList);
        })
        },

        updateTripInfo: function (request, reply) {
            TripService.updateTripInfo(request.payload)
                .then(reply)
                .catch(errorHandling(reply));
        },

    };

};
