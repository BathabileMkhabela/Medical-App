import React from "react";
import { Link } from "react-router-dom";

const HomeDoctor = () => {
    return (
        <div>
            <nav>
                <Link to="/doctor-home">Home</Link>
                <Link to="/appointment-management">Appointment Management</Link>
                <Link to="/test-results-management">Test Results Management</Link>
                <Link to="/notifications">Notifications</Link>
            </nav>
            <h1>Daily Schedule</h1>
            <div>Overview of daily appointments...</div>
            <div>Nofication Center</div>
        </div>

    );
};

export default HomeDoctor;