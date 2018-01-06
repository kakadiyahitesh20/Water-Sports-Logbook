import axios from 'axios';
export function createdUser(user) {
    return { type: 'CREATE_USER', user}
}
export function tripsList(trips) {
    debugger;
    return { type: 'TRIP_LIST', trips}
}


export function createUser(user) {
     console.log('user inside: ', user);
    let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};
    // const requestOptions = {
    //     method: 'POST',
    //     headers: config,
    //     data: {
    //         "Name": user.name,
    //         "Email": user.email,
    //         "dob": user.dob,
    //         "password": user.password
    //     }
    // };
    // return fetch('http://localhost:8098/createNewUser', requestOptions)
    //     .then(response => {
    //         if (!response.ok) {
    //             return Promise.reject(response.statusText);
    //         }
    //         return response.json();
    //     })
    //     .then(user => {
    //
    //         return user;
    //     });
    // let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};
    // const request = axios({
    //     method: 'POST',
    //     url: 'http://localhost:8098/createNewUser',
    //
    //     headers: config,
    //     data: {
    //         "Name": user.name,
    //         "Email": user.email,
    //         "dob": user.dob,
    //         "password": user.password
    //     }
    //      });
    // return () => {
    //     request.then(({response}) =>{
    //     })
    // }

    // Send a POST request
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