import React from 'react'
import {connect} from 'react-redux'
import {createTrip, createUser} from "../../../actions/userActions";
import CreateTripComponent from "./create-trip-componet";

class CreateTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                userId: props.id,
                source: "",
                destination: "",
                departure: "",
                arrival: "",
                transportType: "",
            }
        };
        this.updateForm = this.updateForm.bind(this);
        this.createTrip = this.createTrip.bind(this);
        this.convertToDate = this.convertToDate.bind(this);
    }

    updateForm(event) {
        const field = event.target.name;
        let form = this.state.form;
        form[field] = event.target.value;
        this.setState({
            form: form
        });
    }

    createTrip() {
        let data = this.state.form;
        data.departure = this.convertToDate(data.departure);
        data.arrival= this.convertToDate(data.arrival);
       this.props.createTrip(data);
    }
    convertToDate (value) {
        var parts =value.toString().split('/');
        return new Date(parts[2],parts[0]-1,parts[1]);
    }
    render() {
        const {form} = this.state;
        const {id} = this.props;
        debugger;
        return <CreateTripComponent
                onChange={this.updateForm}
                createTrip={this.createTrip}
                form={form}
                userId={id}/>
    }
}
function mapStateToProps(state, ownProps) {
    return {
        trips: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createTrip: trip => dispatch(createTrip(trip))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);
