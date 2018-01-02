import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Login } from './components/login/login';
import { HomePage } from './components/HomePage/HomePage';
import  { myHistory } from './historyHelper';
import { PrivateRoute } from  './components/privateRoute/PrivateRoute';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        myHistory.listen((location, action) => {
        });
    }
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">

                        <Router history={myHistory}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={Login} />
                                {/*<Route path="/register" component={RegisterPage} />*/}
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
