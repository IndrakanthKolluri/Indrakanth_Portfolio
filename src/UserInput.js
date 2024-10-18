import React, { useState } from "react";

const UserInput = ({ addRow }) => {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [leaveType, setLeaveType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeId && employeeName && leaveType) {
      addRow({
        employeeId,
        employeeName,
        leaveType,
        from: "05/09/2024",
        to: "06/09/2024",
        duration: "24hr/day",
        action: null,
        comments: "",
      });
      setEmployeeId("");
      setEmployeeName("");
      setLeaveType("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Employee ID"
        className="border p-2 mb-2"
        required
      />
      <input
        type="text"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        placeholder="Employee Name"
        className="border p-2 mb-2"
        required
      />
      <input
        type="text"
        value={leaveType}
        onChange={(e) => setLeaveType(e.target.value)}
        placeholder="Leave Type"
        className="border p-2 mb-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Row
      </button>
    </form>
  );
};

export default UserInput;
