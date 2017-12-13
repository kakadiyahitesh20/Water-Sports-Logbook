"use strict";

//const co = require("co");


module.exports = function (server, options, components) {

	const {
		User
	} = components.models;



    /*  ---------------------------------------------------------------
            Create New User
            Params: userInfo - the user to create
			Return: successful user creation
			Effects: None;
        ---------------------------------------------------------------*/

	function createNewUser(usersInfo) {
		console.log("createNewUser");
		console.log(userInfo);
		return User.create(userInfo);
	}



	return {
        createNewUser
	};

};
