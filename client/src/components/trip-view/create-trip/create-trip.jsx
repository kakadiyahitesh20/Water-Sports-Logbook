import React from 'react'
import {connect} from 'react-redux'
import {createTrip, updateTrip} from "../../../actions/userActions";
import CreateTripComponent from "./create-trip-componet";
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class CreateTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: (props.editTripValues !== null) ?
                {
                    source: props.editTripValues.source,
                    destination: props.editTripValues.destination,
                    departure: props.editTripValues.departure,
                    arrival: props.editTripValues.arrival,
                    transportType: props.editTripValues.transportType,
                    userId: props.editTripValues.userId,
                    status: "Inactive",
                    _id: props.editTripValues._id
                } : {
                    source: "",
                    destination: "",
                    departure: moment(),
                    arrival: moment(),
                    transportType: "",
                    userId: props.id,
                    status: "Inactive"
                }
        };
        this.updateForm = this.updateForm.bind(this);
        this.createTrip = this.createTrip.bind(this);
        this.updateDepartureDate = this.updateDepartureDate.bind(this);
        this.updateArrivalDate = this.updateArrivalDate.bind(this);
    }

    updateForm(event) {
        const field = event.target.name;
        let form = this.state.form;
        form[field] = event.target.value;
        this.setState({
            form: form
        });
    }

    updateDepartureDate(date) {
        this.setState({
            form: {
                ...this.state.form,
                departure: date
            }
        });
    }

    updateArrivalDate(date) {
        this.setState({
            form: {
                ...this.state.form,
                arrival: date
            }
        });
    }

    createTrip() {
        let data = this.state.form;
        if(this.props.editTripValues !== null) {
            this.props.updateTrip(data);
        } else {
            this.props.createTrip(data);
        }

    }

    render() {
        const {form} = this.state;
        const {id, editTripValues} = this.props;
        return <CreateTripComponent
            onChange={this.updateForm}
            createTrip={this.createTrip}
            form={form}
            userId={id}
            isEditTrip={(editTripValues !== null)? true: false}
            updateDepartureDate={this.updateDepartureDate}
            updateArrivalDate={this.updateArrivalDate}/>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        trips: state.trips
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createTrip: trip => dispatch(createTrip(trip)),
        updateTrip: trip => dispatch(updateTrip(trip))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);