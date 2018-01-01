import axios from 'axios';
export function createdUser(user) {
    return { type: 'CREATE_USER', user}
}
export function tripsList(trips) {
    debugger;
    return { type: 'TRIP_LIST', trips}
}


export function createUser() {
    let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};
    const request = axios({
        method: 'GET',
        url: 'http://localhost:8098/getUsersList',
        headers: config,
         });
    return (dispatch) => {
        request.then(({data}) =>{
            dispatch(createdUser(user));
        })
    }
}
export function getTripList() {
    let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};
    const request = axios({
        method: 'GET',
        url: 'http://localhost:8098/getTripsList',
        headers: config,
    });
    return (dispatch) => {
        request.then((trips) =>{
            dispatch(tripsList(trips.data));
        })
    }
}

export function createTrip(trip) {
    let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};
    const request = axios({
        method: 'POST',
        url: 'http://localhost:8098/createNewTrip',
        headers: config,
        data: trip
    });
    return (dispatch) => {
        request.then(({data}) =>{
            console.log(data);
        })
    }
}