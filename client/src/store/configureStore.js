import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//import rootReducer from '../reducers';
import users from "../reducers/userReducer";
import {authentication} from '../reducers/authentication.reducer'
import {registration} from "../reducers/registration.reducer";

export default function configureStore(initialState){
    return createStore(
        combineReducers({
                users,
            authentication,
            registration
        }),
        {},
        applyMiddleware(thunk, logger)
    );
}