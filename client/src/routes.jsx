import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from "./components/App";
import Login from "./components/login/login";
import TripView from "./components/trip-view/trip-view";

export default (
    <Route path="/" component= {App}>
        <IndexRoute  component={Login}/>
        <Route path="tripView/:id" component={TripView}/>
    </Route>
);
