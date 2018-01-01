import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import configureStore from './store/configureStore';
import routes from './routes';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App"

const store = configureStore();
ReactDom.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById("main")
);
