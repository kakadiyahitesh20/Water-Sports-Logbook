import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {userConstants} from "../../_constants/user.constants";

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

    handleDeleteUser(id) {
        function _delete(id) {
            return dispatch => {
                dispatch(request(id));

                userService.delete(id)
                    .then(
                        user => {
                            dispatch(success(id));
                        },
                        error => {
                            dispatch(failure(id, error));
                        }
                    );
            };

            function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
            function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
            function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
        }

        return (e) => this.props.dispatch(_delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
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