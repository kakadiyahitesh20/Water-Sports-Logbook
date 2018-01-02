import {userConstants} from "../_constants/user.constants";
import {checkUserLogin, log_out} from "./userActions";
import {myHistory} from '../historyHelper'

export function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

       var result = checkUserLogin({email: username, password: password})
       .then(
                user => {
                    dispatch(success(user));
                    myHistory.push('/');
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