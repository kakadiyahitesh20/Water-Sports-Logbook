import {userConstants} from "../_constants/user.constants";
import {checkUserLogin, log_out, createUser} from "./userActions";
import {Link} from "react-router/es/Link";
import {browserHistory} from 'react-router';
import {Route, Redirect} from 'react-router-dom';

export function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

       var result = checkUserLogin({email: username, password: password})
       .then(
                user => {
                    // login successful if there's object the response
                    if (user[0] !== undefined) {
                        console.log( ' user :', JSON.stringify(user[0]));
                        // store user details in local storage
                        localStorage.setItem('user', JSON.stringify(user));
                        dispatch(success(user));
                        if(user[0].Email == 'admin@admin.com'){
                            console.log('admin::', user[0].Email);
                            browserHistory.push('/adminview/' + user[0]._id);
                        }else {
                            console.log('not admin:', user[0].Email);
                            browserHistory.push('/tripview/' + user[0]._id);
                        }
                    }
                    else{
                        dispatch(failure('User not found'));
                    }
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
export function logout() {
    log_out();
    return { type: userConstants.LOGOUT };
}

export function register(user) {
    return dispatch => {
        dispatch(request(user))
        console.log('user register ...', user);
       var result =  createUser(user)
           .then(
           response => {
               console.log(response);
               if (response.status == 200) {
                   console.log( ' user name:', response.data.name);
                   dispatch(success(response.data));
                   browserHistory.push('/');//tripview/'+response.data._id);
               }
               else{
                   dispatch(failure('registration failed'));
               }
           },
           error => {
               dispatch(failure(error));
               // dispatch(alertActions.error(error));
           }
       );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}