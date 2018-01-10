import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from "./components/App";

import TripView from "./components/trip-view/trip-view";
import {Login} from "./components/login/login";
import {HomePage} from "./components/HomePage/HomePage";
import {RegisterPage} from "./components/RegisterPage/RegisterPage";
import AdminView from "./components/adminview/adminView";
import Report1 from "./components/report1";

export default (
    <Route path="/" component= {App}>
        <IndexRoute  component={Login}/>
        <Route path="/Home" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/logout" component={Login} />
        <Route path="/tripView/:id" component={TripView}/>
        <Route path="/adminView/:id" component={AdminView}/>
        <Route path="/report1" component={Report1}/>



    </Route>
);
