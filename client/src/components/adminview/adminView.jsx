import React from 'react'
import Header from "../common/header";
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
            tripReport: (value ==="report1") ? true : false
        })
    }
    render() {
        const {tripReport} = this.state;
        return <div className="container">
            <Header  module={tripReport ? "report1" : "report2"}
                     onChangeNavigation={this.onChangeNavigation}/>
          <h1>Admin page</h1>
        </div>
    }
}

export default AdminView;