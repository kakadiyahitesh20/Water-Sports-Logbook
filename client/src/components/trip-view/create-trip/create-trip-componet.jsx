import React from 'react';
import Header from "../../common/header";

const CreateTripComponent= ({onChange, createTrip, form, userId}) => {
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
                                <input type="text"
                                       className="form-control"
                                       placeholder="Enter Source Location"
                                       name="source"
                                       value={form.source}
                                       onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Destination</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Enter Destination"
                                       name="destination"
                                       value={form.destination}
                                       onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Departure Time</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Enter time"
                                       name="departure"
                                       value={form.departure}
                                       onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Arrival Time</label>
                                <input type="text"
                                       className="form-control"
                                       name="arrival"
                                       placeholder="Enter time"
                                       onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Boat Type</label>
                                <select name="transportType"
                                        className="form-control"
                                        onChange={onChange}>
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