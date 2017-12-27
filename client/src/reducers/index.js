import {combineReducers} from 'redux';
import users from "./userReducer";
import trips from "./tripsReducer";

const rootReducer= combineReducers({
    users,
    trips
});

export default rootReducer;
