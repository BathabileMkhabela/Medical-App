/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

import React  from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePatient from "./Screens/HomePatient";
import DoctorAvailability from "./Screens/DoctorAvailability";
import AppointmentDetails from "./Screens/AppointmentDetails";
import BloodTestResults from "./Screens/BloodTestResults";
import HomeDoctor from "./Screens/HomeDoctor";
import AppointmentManagement from "./Screens/AppointmentManagement";
import TestResultsManagement from "./Screens/TestResultsManagement";
import NoficationSystem from "./Screens/NotificationSystem";
import './App.css'

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePatient />} />
        <Route path="/doctor-availability" element={<DoctorAvailability />} />
        <Route path="/appointment-details" element={<AppointmentDetails />} />
        <Route path="/blood-test-results" element={<BloodTestResults />} />
        <Route path="/doctor-home" element={<HomeDoctor />} />
        <Route path="/appointment-management" element={<AppointmentManagement />} />
        <Route path="/test-results-management" element={<TestResultsManagement />} />
        <Route path="/notifications" element={<NoficationSystem />} />
      </Routes>
    </Router>

  );
};

export default App;
