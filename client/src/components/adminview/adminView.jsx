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
            {/*<Header  module={tripReport ? "report1" : "report2"}*/}
                     {/*onChangeNavigation={this.onChangeNavigation}/>*/}
          <h1>Admin page</h1>
            <Link to="/report1"> Report 1 One </Link>
        </div>
    }
}

export default AdminView;