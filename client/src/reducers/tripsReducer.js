export default function userReducer(state = [], action) {
    // debugger;
    switch(action.type) {
        case 'TRIP_LIST':
            return action.trips;
        default:
            return state;
    }
}