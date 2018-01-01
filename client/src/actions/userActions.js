import axios from 'axios';
export function createdUser(user) {
    return { type: 'CREATE_USER', user}
}

export function createUser(user) {
    let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs',
        'crossDomain': true,
        'Access-Control-Allow-Origin':'localhost',
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, If-Modified-Since, Access-Control-Request-Method, Access-Control-Request-Headers, api-key"};
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