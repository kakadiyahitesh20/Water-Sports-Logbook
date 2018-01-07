import React from 'react'
import CreateTrip from "./create-trip/create-trip";
import TripList from "./trip-list/trip-list";
import Header from "../common/header";
import {deleteTrip, getTripList} from "../../actions/userActions";
import {connect} from "react-redux";

class TripView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            createTripView: true,
            editTripValues: null
        };
        this.onChangeNavigation = this.onChangeNavigation.bind(this);
        this.editTripHandler = this.editTripHandler.bind(this);
    }

    onChangeNavigation (value) {
        this.setState({
            createTripView: (value ==="createTrip") ? true : false
        })
    }
    editTripHandler (trip) {
        debugger;
        this.setState ({
            createTripView : true,
            editTripValues : trip
        })
    }

    render() {
        const {createTripView,editTripValues} = this.state;
        return <div className="container">
            <Header  module={createTripView ? "create" : "getTripList"}
                     onChangeNavigation={this.onChangeNavigation}/>
            {createTripView ?
                <CreateTrip id={this.props.params.id}
                            editTripValues={editTripValues}/>
                : <TripList id={this.props.params.id}
                            editTrip={this.editTripHandler}/>
            }
        </div>
    }
}

export default TripView;