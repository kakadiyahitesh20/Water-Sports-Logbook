import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {userConstants} from "../../_constants/user.constants";
// import Link from "react-router/es/Link";
//import { userActions } from '../_actions';

class HomePage extends React.Component {
    login(username, password) {
        return dispatch => {
            dispatch(request({ username }));

            // userService.login(username, password)
            //     .then(
            //         user => {
            //             dispatch(success(user));
            //             history.push('/');
            //         },
            //         error => {
            //             dispatch(failure(error));
            //             dispatch(alertActions.error(error));
            //         }
            //     );
        };

        function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
        // function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
        // function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
    }


    componentDidMount() {
        function getAll() {
            return dispatch => {
                dispatch(request());

                // userService.getAll()
                //     .then(
                //         users => dispatch(success(users)),
                //         error => dispatch(failure(error))
                //     );
            };

            function request() { return { type: userConstants.GETALL_REQUEST } }
            function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
            function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
        }

        this.props.dispatch(getAll());
    }

    goToTrip() {

    }

    render() {
        return(
            <div>
                <h1>Home page</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };