import {combineReducers} from 'redux';
import users from "./userReducer";
import {trips} from "./tripsReducer";
import {registration} from "./registration.reducer";

const rootReducer= combineReducers({
    users,
    trips,
    registration
});

export default rootReducer;