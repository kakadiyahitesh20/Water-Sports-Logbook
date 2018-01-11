import React from 'react';
import { connect } from  'react-redux';
import {getTripList, getUserList} from "../actions/userActions";
class Report1 extends React.Component{
    constructor(props) {
        super(props);
    }
    ShowListItem(){
        var groups = [];
        const grouped = _.groupBy(this.props.trips.filter( x=> x.status !== 'Deleted'), "transportType");
        for(var group in grouped)
        {
            groups.push({"name" : group, "length" : grouped[group].length });
        }
        return groups.map((trip) => {
            return (
                <tr key={trip.name}><td>{trip.name}</td><td>{trip.length}</td></tr>
            );
        })
    }
    ShowAllTrip(){

        return this.props.trips.filter( x=> x.status !== 'Deleted').map((trip) => {
            return (
                <tr key={trip._id}><td>{new Date(trip.departure).toLocaleDateString()}</td><td>{trip.source}</td><td>{trip.destination}</td></tr>
            );
        })
    }
    ShowAllUsers(){
        debugger;
        return this.props.users.map((user) => {
            return (
                <tr key={user._id}><td>{user.Name}</td><td>{user.Email}</td><td>{new Date(user.dob).toLocaleDateString()}</td></tr>
            );
        })
    }
    componentDidMount() {
        this.props.getTripList();
        this.props.getUserList();
    }

    render(){

        return <div>
            <h1>Boats summary :</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th >Boat</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                {this.ShowListItem()}
                </tbody>
            </table>

            <h1>All trips :</h1>
            <table className="table">
                <thead>
                <tr>
                    <th >departure</th>
                    <th>Source</th>
                    <th>destination</th>
                </tr>
                </thead>
                <tbody>
                {this.ShowAllTrip()}
                </tbody>
            </table>

            <h1>All Users :</h1>
            <table className="table">
                <thead>
                <tr>
                    <th >Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                </thead>
                <tbody>
                {this.ShowAllUsers()}
                </tbody>
            </table>



        </div>
    }
}
function mapStateToProps(state) {
    return {

        trips: state.trips,
        users: state.users
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getTripList: (id) => dispatch(getTripList()),
        getUserList: (id) => dispatch(getUserList()),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Report1);