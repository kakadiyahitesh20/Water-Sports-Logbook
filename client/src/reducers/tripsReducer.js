
export  function trips(state = [], action) {
    switch(action.type) {
        case 'TRIP_LIST':
            return action.trips;
        case 'DELETE_TRIP':
            return state.filter(trip => trip._id !== action.tripId);
        default:
            return state;
    }
}