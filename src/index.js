import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Log from './Log';
import LeaveApproval from './LeaveApproval';
import AttendanceApproval from './AttendanceApproval';
import ProfileDetailsApproval from './ProfileDetailsApproval';
import ResignationApproval from './ResignationApproval';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Log />} />
    <Route path="/LeaveApproval" element={<LeaveApproval/>} />
    <Route path="/AttendanceApproval" element={<AttendanceApproval/>}/>
    <Route path="/ProfileDetailsApproval" element={<ProfileDetailsApproval/>}/>
    <Route path="/ResignationApproval" element={<ResignationApproval/>}/>


    <Route path="/App" element={<App />} />
    </Routes>
  </Router>
);
