import React from 'react';
import { NavLink } from 'react-router-dom';

function ApprovalMaster() {
  return (
    <div style={{ height: 'calc(100vh - 4rem)' }} className="flex items-center justify-center">
      <div className="flex flex-col ">
        <NavLink 
          className="block w-48 text-center border border-black px-4 py-2 my-1 rounded-lg hover:bg-orange-200" 
          to="/leaveapproval"
        >
          Leaves
        </NavLink>
        <NavLink 
          className="block w-48 text-center border border-black px-4 py-2 my-1 rounded-lg hover:bg-orange-200" 
          to="/AttendanceApproval"
        >
          Attendance
        </NavLink>
        <NavLink 
          className="block w-48 text-center border border-black px-4 py-2 my-1 rounded-lg hover:bg-orange-200" 
          to="/ProfileDetailsApproval"
        >
          Profile Details
        </NavLink>
        <NavLink 
          className="block w-48 text-center border border-black px-4 py-2 my-1 rounded-lg hover:bg-orange-200" 
          to="/ResignationApproval"
        >
          Resignation
        </NavLink>
      </div>
    </div>
  );
}

export default ApprovalMaster;
