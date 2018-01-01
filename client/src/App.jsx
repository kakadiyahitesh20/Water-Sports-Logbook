import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/login/login';
import { HomePage } from './components/HomePage/HomePage';
import  { myHistory } from './historyHelper';
//import { alertActions } from '../_actions';
import { PrivateRoute } from  './components/privateRoute/PrivateRoute';

// import { LoginPage } from '../LoginPage';
// import { RegisterPage } from '../RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        myHistory.listen((location, action) => {
            // clear alert on location change
           // dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
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
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
// import React from 'react'
//
// class App extends React.Component {
//
//     render() {
//
//         return (
//             <div className="container-fluid">
//                 {this.props.children}
//             </div>
//         );
//     }
//
// }
// export default App;
/////////////////////////////////////////////////////////
// import React from 'react'
// import Modal from 'react-modal'
// import {connect} from 'react-redux'
// import {createUser} from './actions/userActions';
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: ""
//         };
//         this.onTitleChange = this.onTitleChange.bind(this);
//         this.onClickSave= this.onClickSave.bind(this);
//     }
//     onTitleChange(event){
//         this.setState({
//             user: event.target.value
//         });
//     };
//     onClickSave() {
//         this.props.createUser(this.state.user);
//     };
//     render() {
//         // debugger;
//         const{user}=  this.state;
//         const{users} = this.props;
//
//         console.log(users);
//         return <div>
//             {(users !== undefined) ?
//                 users.map(user =>
//                     <div>user</div>): null}
//             <h1>Welcome <br/> Water Sports Logbook client</h1>
//                 <input type="text"
//                        value={user}
//                        onChange={this.onTitleChange} />
//                 <button type="submit" onClick={this.onClickSave}>SAVE</button>
//         </div>
//     }
//
// }
// function mapStateToProps(state, ownProps) {
//     // debugger;
//     return {
//         users: state.users
//     };
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         createUser: user => dispatch(createUser(user))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);