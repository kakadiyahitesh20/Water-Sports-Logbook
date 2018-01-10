import React from 'react'
import {deleteTrip, getTripListById} from "../../../actions/userActions";
import {connect} from "react-redux";
import "./trip-list.css";


class TripList extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
     //   debugger;
        this.props.getTripList(this.props.id);
    }
    deleteTripHandler(event, id) {
        event.preventDefault();
        this.props.deleteTrip(id);
    }
    render() {
        const {trips, editTrip} = this.props;
        return <div className="container" style={{marginTop: 100}}>
            <h2> Trip Details </h2>
            <div className="row font-weight-bold">

                <div className="col-sm">Source </div>
                <div className="col-sm"> Destination </div>
                <div className="col-sm"> Arrival Date </div>
                <div className="col-sm"> Departure Date </div>
                <div className="col-sm"> Boat Type</div>
                <div className="col-sm"></div>
                <div className="col-sm"></div>
            </div>
            {trips.map(trip =>
                <div className="row listView" key={trip._id}>
                    <div className="col-sm">{trip.source}</div>
                    <div className="col-sm"> {trip.destination}</div>
                    <div className="col-sm"> {new Date(trip.arrival).toLocaleDateString()} </div>
                    <div className="col-sm">{new Date(trip.departure).toLocaleDateString()}</div>
                    <div className="col-sm">{trip.transportType}</div>
                    <button className="col-sm btn btn-primary buttonClass" onClick={(e) => editTrip(trip)}>Edit</button>
                    <button className="col-sm btn btn-primary buttonClass" onClick={(e) => this.deleteTripHandler(e, trip._id)}>Delete</button>
                </div>
                )}
        </div>
    }
}
function mapStateToProps(state, ownProps) {
    return {
        trips: state.trips
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTripList: (id) => dispatch(getTripListById(id)),
        deleteTrip : (tripId) => dispatch(deleteTrip(tripId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TripList);