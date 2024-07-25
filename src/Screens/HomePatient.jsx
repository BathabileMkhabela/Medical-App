import React from "react";
import { Link } from 'react-router-dom'

const HomePatient = () => {

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/doctor-availability">Doctor Availability</Link>
                <Link to="/appointment-details">Appointment Details</Link>
                <Link to="/blood-test-results">Blood Test Results</Link>
            </nav>
            <h1>Upcoming Appointments</h1>
            <div>List of upcoming appointments...</div>
            <div>Nofication Center...</div>
        </div>

    );
};

export default HomePatient;