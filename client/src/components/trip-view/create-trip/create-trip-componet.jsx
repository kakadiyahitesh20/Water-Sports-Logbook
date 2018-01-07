import React from 'react';
import Header from "../../common/header";
import DatePicker from 'react-datepicker';
import moment from 'moment';

const CreateTripComponent = ({onChange, createTrip, form, userId,
                                 updateDepartureDate, updateArrivalDate, isEditTrip}) => {
    return (
        <div className="container">
            <h4>welcome to create trip</h4>
            <div className="row">
                <div className="col-lg-9">
                    <div className="card card-outline-secondary my-4">
                        <div className="card-header">
                            Trip Details
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Source</label>
                                <select name="source"
                                        className="form-control"
                                        onChange={onChange}
                                        value={form.source}>
                                    <option value=""> --select---</option>
                                    <option value="Hamburg">Hamburg</option>
                                    <option value="Kiel">Kiel</option>
                                    <option value="Flensburg">Flensburg</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Destination</label>

                                <select name="destination"
                                        className="form-control"
                                        onChange={onChange}
                                        value={form.destination}>
                                    <option value=""> --select---</option>
                                    <option value="Hamburg">Hamburg</option>
                                    <option value="Kiel">Kiel</option>
                                    <option value="Flensburg">Flensburg</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Departure Time</label>
                                <DatePicker selected={isEditTrip ? moment(form.departure) : form.departure}
                                            onChange={updateDepartureDate}/>
                            </div>
                            <div className="form-group">
                                <label>Arrival Time</label>
                                <DatePicker selected={isEditTrip ? moment(form.arrival):form.arrival}
                                            onChange={updateArrivalDate}/>
                            </div>
                            <div className="form-group">
                                <label>Boat Type</label>
                                <select name="transportType"
                                        className="form-control"
                                        onChange={onChange}
                                        value={form.transportType}>
                                    <option value=""> --select---</option>
                                    <option value="boat 1">Boat 1</option>
                                    <option value="boat 2">Boat 2</option>
                                </select>
                            </div>
                            <button className="btn btn-primary" onClick={createTrip}>save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateTripComponent;