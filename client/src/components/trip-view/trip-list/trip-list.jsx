import React from 'react'
import {createTrip, getTripList} from "../../../actions/userActions";
import {connect} from "react-redux";


class TripList extends React.Component {

    componentDidMount() {
        this.props.getTripList();
    }
    render() {
        const {trips} = this.props;
        return <div className="container" style={{marginTop: 100}}>
            Details:
            {trips.map(trip =>
                <div key={trip.userId}>{trip.source} {trip.destination} {trip.arrival} {trip.departure} </div>)}
        </div>
    }
}
function mapStateToProps(state, ownProps) {
    debugger;
    return {
        trips: state.trips
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTripList: trip => dispatch(getTripList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TripList);
