"use strict";

module.exports = function (server, options, services) {

    const {UserService} = services;

	/* Helpers */

    let errorHandling = _.curry(
        function errorHandling(reply, err) {
            server.log("error", err);
            reply(err);
        }
    );

    return {

        createNew: function (request, reply) {
            UserService.createNewUser(request.payload)
                .then(reply)
                .catch(errorHandling(reply));
        },
    };

};
