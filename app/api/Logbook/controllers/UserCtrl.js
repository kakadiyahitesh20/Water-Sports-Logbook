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

        getUsersList: function (request, reply) {
            console.log("UserCtrl --> getUsersList");
            // Call the user service to get a specific userlist
            UserService.getUserList()
                .then(reply)
                .catch(errorHandling(reply));
        },

        usersLoginCheck: function (request, reply) {
            console.log("UserCtrl --> checkUserLogin");
            console.log(request)
            // Call the user service to check login
            UserService.checkUserLogin(request.params.email,request.params.password)
                .then(checkLogin => {
                reply(checkLogin);
        })
        },

    };

};
