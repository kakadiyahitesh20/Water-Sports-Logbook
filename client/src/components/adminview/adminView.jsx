import React from 'react'
import Header from "../common/header";
import {Link} from 'react-router';
class AdminView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripReport: true
        };
        this.onChangeNavigation = this.onChangeNavigation.bind(this);
    }
    onChangeNavigation (value) {
        this.setState({
            tripReport: (value ==="report") ? true : false
        })
    }
    render() {
        const {tripReport} = this.state;
        return  <div className="container">
          <h1>Admin page</h1>
            <Link to="/report1"> Log book Report </Link>
        </div>
    }
}

export default AdminView;