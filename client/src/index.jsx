import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';

import App from "./App"

const store = configureStore();
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("main")
);
