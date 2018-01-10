import axios from 'axios';

export function tripsList(trips) {
    return { type: 'TRIP_LIST', trips}
}


export function createUser(user) {
     console.log('user inside: ', user);
    let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};
    return axios.post('http://localhost:8098/createNewUser', {
                "Name": user.name,
                "Email": user.email,
                "dob": user.dob,
                "password": user.password
    }, {
        headers: {
            'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs',
        }
    })
        .then(function (response) {
            return(response);
        })
        .catch(function (error) {
            return(error);
        });
}

export function getTripListById(id) {
    let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};
    const request = axios({
        method: 'GET',
        url: 'http://localhost:8098/getTripsListById/'+id,
        headers: config,
    });
    return (dispatch) => {
        request.then((trips) =>{
            dispatch(tripsList(trips.data));
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
            console.log('trips.data : ', trips.data);
            dispatch(tripsList(trips.data.results));
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
            alert("Trip created successfully");
        })
    }
}
export function updateTrip(trip) {
    let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};
    const request = axios({
        method: 'POST',
        url: 'http://localhost:8098/updateTripInfo',
        headers: config,
        data: trip
    });
    return (dispatch) => {
        request.then(({data}) =>{
            alert("Trip updated successfully")
        })
    }
}
export function deletedTrip(tripId) {
    return { type: 'DELETE_TRIP', tripId}
}

export function deleteTrip(tripId) {
    debugger;
    let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};
    const request = axios({
        method: 'POST',
        url: 'http://localhost:8098/removeTrip/'+tripId,
        headers: config,
    });
    return (dispatch) => {
        request.then(({data}) =>{
            dispatch(deletedTrip(tripId));
        })
    }
}

export function checkUserLogin(user) {
    let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};
    const requestOptions = {
        method: 'GET',
        headers: config
    };
    return fetch('http://localhost:8098/checkUserLogin/'+user.email+'/'+user.password, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {

            return user;
        });

}
export function log_out() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}