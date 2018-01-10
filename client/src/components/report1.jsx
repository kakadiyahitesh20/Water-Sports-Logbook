import React from 'react';
import { connect } from  'react-redux';
import {getTripList, deleteTrip} from "../actions/userActions";
class Report1 extends React.Component{
    constructor(props) {
        super(props);
    }
    ShowListItem(){
        var groups = [];
        const grouped = _.groupBy(this.props.trips, "transportType");
        for(var group in grouped)
        {
            groups.push({"name" : group, "length" : grouped[group].length });
        }
        return groups.map((trip) => {
            return (
              <li key={trip.name}>{trip.name} {trip.length}</li>
            );
        })
    }
    componentDidMount() {
        this.props.getTripList();
    }

    render(){

        return <div>
            <h1>Boats summary :</h1>
            <ul>
                {this.ShowListItem()}
            </ul>

        </div>
    }
}
function mapStateToProps(state) {
    return {
        trips: state.trips
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getTripList: (id) => dispatch(getTripList()),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Report1);