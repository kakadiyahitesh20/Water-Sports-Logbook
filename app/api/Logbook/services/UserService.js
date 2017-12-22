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
		console.log(usersInfo);
		return User.create(usersInfo);
	}

    /*  ---------------------------------------------------------------
            Get User List
            Params: None
            Return: User list in JSON
            Effects: None;
        ---------------------------------------------------------------*/

    function getUserList() {
        console.log("Start getUserList ---->");
        return User.find();
    }

    /*  ---------------------------------------------------------------
           Check User credentials
           Params: Passed email and password
           Return: User details in JSON
           Effects: None;
       ---------------------------------------------------------------*/

    function checkUserLogin(email,password) {
        console.log("Start checkUserLogin ---->");
        console.log(email);
        console.log(password);
        return User.find({$and:[{Email : email,password : password}]});
    }


    return {
        createNewUser,
		getUserList,
		checkUserLogin
	};

};
