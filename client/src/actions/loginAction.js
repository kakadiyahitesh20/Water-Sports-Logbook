import {userConstants} from "../_constants/user.constants";
import {checkUserLogin, log_out} from "./userActions";
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
                        browserHistory.push('/tripview/'+user[0]._id);
                    }
                    else{
                        dispatch(failure('User not found'));
                    }

                },
                error => {
                    dispatch(failure(error));
                   // dispatch(alertActions.error(error));
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