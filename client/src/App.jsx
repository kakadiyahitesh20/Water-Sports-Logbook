import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {createUser} from './actions/userActions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave= this.onClickSave.bind(this);
    }
    onTitleChange(event){
        this.setState({
            user: event.target.value
        });
    };
    onClickSave() {
        this.props.createUser(this.state.user);
    };
    render() {
        debugger;
        const{user}=  this.state;
        const{users} = this.props;

        console.log(users);
        return <div>
            {(users !== undefined) ?
                users.map(user =>
                    <div>user</div>): null}
            <h1>Welcome <br/> Water Sports Logbook client</h1>
                <input type="text"
                       value={user}
                       onChange={this.onTitleChange} />
                <button type="submit" onClick={this.onClickSave}>SAVE</button>
        </div>
    }

}
function mapStateToProps(state, ownProps) {
    debugger;
    return {
        users: state.users
    };
}
function mapDispatchToProps(dispatch) {
    return {
        createUser: user => dispatch(createUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);