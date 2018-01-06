import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from "./components/App";

import TripView from "./components/trip-view/trip-view";
import {Login} from "./components/login/login";
import {PrivateRoute} from "./components/privateRoute/PrivateRoute";
import {HomePage} from "./components/HomePage/HomePage";
import {RegisterPage} from "./components/RegisterPage/RegisterPage";

export default (
    <Route path="/" component= {App}>
        <IndexRoute  component={Login}/>
        <Route path="/Home" component={HomePage} />
        {/*<Route path="tripView/:id" component={TripView}/>*/}
        {/*<PrivateRoute exact path="/" component={HomePage} />*/}
        <Route path="/register" component={RegisterPage} />
        <Route path="/logout" component={Login} />
        <Route path="/tripView/:id" component={TripView}/>

    </Route>
);
