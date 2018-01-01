import React from 'react'
import CreateTrip from "./create-trip/create-trip";
import TripList from "./trip-list/trip-list";
import Header from "../common/header";

class TripView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            createTripView: true
        };
        this.onChangeNavigation = this.onChangeNavigation.bind(this);
    }

    onChangeNavigation (value) {
        this.setState({
            createTripView: (value ==="createTrip") ? true : false
        })
    }
    render() {
        const {createTripView} = this.state;
        return <div className="container">
            <Header  module={createTripView ? "create" : "getTripList"}
                     onChangeNavigation={this.onChangeNavigation}/>
            {createTripView ?
                <CreateTrip id={this.props.params.id}/>
                : <TripList/>
            }
        </div>
    }
}

export default TripView;