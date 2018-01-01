import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//import rootReducer from '../reducers';
import users from "../reducers/userReducer";

export default function configureStore(initialState){
    return createStore(
        combineReducers({
                users
        }),
        {},
        applyMiddleware(thunk, logger)
    );
}