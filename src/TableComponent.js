import React, { useState } from "react";
import UserInput from "./UserInput";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [approvedOrRejectedData, setApprovedOrRejectedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;
  const [searchTerm, setSearchTerm] = useState("");
  const [popupData, setPopupData] = useState({
    isOpen: false,
    rowIndex: null,
    action: "",
    comment: "",
  });

  // Handles saving and transferring data between tables
  const handlePopupSubmit = () => {
    const updatedData = [...data];
    const rowIndex = popupData.rowIndex;
    const action = popupData.action === "Yes" ? "Approved" : "Rejected";

    const row = {
      ...updatedData[rowIndex],
      comments: popupData.comment,  // Using the comment from the popup
      action,
    };

    // Remove row from the data and move it to the approved/rejected table
    updatedData.splice(rowIndex, 1);
    setData(updatedData);
    setApprovedOrRejectedData([...approvedOrRejectedData, row]);

    // Close popup
    setPopupData({ isOpen: false, rowIndex: null, action: "", comment: "" });
  };

  const handleCancelPopup = () => {
    // Close the popup without saving anything
    setPopupData({ isOpen: false, rowIndex: null, action: "", comment: "" });
  };

  const handlePopupOpen = (index, action) => {
    // Open popup for the specific row and prefill the comment box
    setPopupData({
      isOpen: true,
      rowIndex: index,
      action,
      comment: `You have clicked ${action}`,  // Prefilling comment with action
    });
  };

  const filteredData = data.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="p-4">
      {/* Search Bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="border p-2 mb-4"
      />

      {/* User Input Component */}
      <UserInput addRow={(newRow) => setData([...data, newRow])} />

      {/* Pending Approvals Table */}
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Employee ID</th>
            <th className="p-2 border">Employee Name</th>
            <th className="p-2 border">Leave Type</th>
            <th className="p-2 border">From</th>
            <th className="p-2 border">To</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Action</th>
            <th className="p-2 border">Comments</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index} className="border">
              <td className="p-2 border">{row.employeeId}</td>
              <td className="p-2 border">{row.employeeName}</td>
              <td className="p-2 border">{row.leaveType}</td>
              <td className="p-2 border">{row.from}</td>
              <td className="p-2 border">{row.to}</td>
              <td className="p-2 border">{row.duration}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handlePopupOpen(index, "Yes")}
                  className="bg-green-500 p-2 text-white rounded">
                  Yes
                </button>
                <button
                  onClick={() => handlePopupOpen(index, "No")}
                  className="bg-red-500 p-2 text-white rounded ml-2">
                  No
                </button>
              </td>
              <td className="p-2 border">{row.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */} 
      <div className="mt-4 flex justify-center">
        {[...Array(totalPages)].map((_, page) => (
          <button
            key={page + 1}
            onClick={() => setCurrentPage(page + 1)}
            className={`p-2 mx-1 ${
              currentPage === page + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>

      {/* Approved/Rejected Table */}
      <h3 className="mt-8 text-lg font-semibold">Approved/Rejected</h3>
      <table className="min-w-full border mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Employee ID</th>
            <th className="p-2 border">Employee Name</th>
            <th className="p-2 border">Leave Type</th>
            <th className="p-2 border">From</th>
            <th className="p-2 border">To</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Action</th>
            <th className="p-2 border">Comments</th>
          </tr>
        </thead>
        <tbody>
          {approvedOrRejectedData.map((row, index) => (
            <tr key={index} className="border">
              <td className="p-2 border">{row.employeeId}</td>
              <td className="p-2 border">{row.employeeName}</td>
              <td className="p-2 border">{row.leaveType}</td>
              <td className="p-2 border">{row.from}</td>
              <td className="p-2 border">{row.to}</td>
              <td className="p-2 border">{row.duration}</td>
              <td className="p-2 border">{row.action}</td>
              <td className="p-2 border">{row.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup for Comments */}
      {popupData.isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded w-96">
            <h3 className="text-lg font-semibold">Comments</h3>
            <input
              type="text"
              value={popupData.comment}
              onChange={(e) =>
                setPopupData({ ...popupData, comment: e.target.value })
              }
              className="border p-2 w-full mt-2"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handlePopupSubmit}
                className="bg-green-500 text-white p-2 rounded mr-2"
              >
                Submit
              </button>
              <button
                onClick={handleCancelPopup}
                className="bg-red-500 text-white p-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
