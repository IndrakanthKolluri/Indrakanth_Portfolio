import React, { useState } from 'react';
import { FaLessThan, FaSearch } from 'react-icons/fa';
import { MdCheck, MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function ProfileDetailsApproval() {
  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, name: 'John Doe', type: 'Type A', presentField: 'Value 1', newField: 'Value 2', comments: 'First Name' },
    { id: 2, name: 'Jane Smith', type: 'Type B', presentField: 'Value 3', newField: 'Value 4', comments: 'Mail id' },
    { id: 3, name: 'Alice Johnson', type: 'Type A', presentField: 'Value 5', newField: 'Value 6', comments: 'Phone number' },
  ]);

  const [allRequests, setAllRequests] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);
  const [comment, setComment] = useState('');
  const [isApproved, setIsApproved] = useState(false);
  const [pendingPage, setPendingPage] = useState(0);
  const [allPage, setAllPage] = useState(0);
  const rowsPerPage = 3;
  const [showValidationError, setShowValidationError] = useState(false);

  // Filter states
  const [pendingFilters, setPendingFilters] = useState({ id: '', name: '', type: '' });
  const [allFilters, setAllFilters] = useState({ id: '', name: '', type: '' });

  // Search states
  const [pendingSearch, setPendingSearch] = useState('');
  const [allSearch, setAllSearch] = useState('');

  // Unique values for dropdowns
  const uniqueTypes = [...new Set(pendingRequests.map(req => req.type))];
  const uniqueNames = [...new Set(pendingRequests.map(req => req.name))];

  const handleAction = (request, isApprove) => {
    setCurrentRequest(request);
    setShowPopup(true);
    setComment('');
    setIsApproved(isApprove);
    setShowValidationError(false); // Reset validation error
  };

  const handleSubmit = () => {
    if (!comment.trim()) {
      setShowValidationError(true);
      return; // Prevent submission if comment is empty
    }

    const updatedRequest = { ...currentRequest, comments: comment };

    if (isApproved) {
      setAllRequests((prev) => [...prev, { ...updatedRequest, status: 'Approved' }]);
    } else {
      setAllRequests((prev) => [...prev, { ...updatedRequest, status: 'Rejected' }]);
    }

    setPendingRequests((prev) => prev.filter((req) => req.id !== currentRequest.id));
    setShowPopup(false);
    setComment(''); // Clear comment
  };

  const pendingRequestsToShow = pendingRequests.filter(req => {
    const searchText = pendingSearch.toLowerCase();
    const idMatch = pendingFilters.id ? req.id.toString() === pendingFilters.id : true;
    const nameMatch = pendingFilters.name ? req.name.includes(pendingFilters.name) : true;
    const typeMatch = pendingFilters.type ? req.type === pendingFilters.type : true;
  
    const searchMatch =
      req.id.toString().includes(searchText) ||
      req.name.toLowerCase().includes(searchText) ||
      req.type.toLowerCase().includes(searchText) ||
      req.presentField.toLowerCase().includes(searchText) ||
      req.newField.toLowerCase().includes(searchText) ||
      req.comments.toLowerCase().includes(searchText);
  
    return idMatch && nameMatch && typeMatch && (searchText ? searchMatch : true);
  }).slice(pendingPage * rowsPerPage, (pendingPage + 1) * rowsPerPage);
  

  const allRequestsToShow = allRequests.filter(req => {
    const searchText = allSearch.toLowerCase();
    const idMatch = allFilters.id ? req.id.toString() === allFilters.id : true;
    const nameMatch = allFilters.name ? req.name.includes(allFilters.name) : true;
    const typeMatch = allFilters.type ? req.type === allFilters.type : true;
  
    const searchMatch =
      req.id.toString().includes(searchText) ||
      req.name.toLowerCase().includes(searchText) ||
      req.type.toLowerCase().includes(searchText) ||
      req.presentField.toLowerCase().includes(searchText) ||
      req.newField.toLowerCase().includes(searchText) ||
      req.status.toLowerCase().includes(searchText) ||
      req.comments.toLowerCase().includes(searchText);
  
    return idMatch && nameMatch && typeMatch && (searchText ? searchMatch : true);
  }).slice(allPage * rowsPerPage, (allPage + 1) * rowsPerPage);
  

  const totalPendingPages = Math.ceil(pendingRequests.length / rowsPerPage);
  const totalAllPages = Math.ceil(allRequests.length / rowsPerPage);

  return (
    <div>
      <NavLink className="flex items-center justify-start px-2 py-2 overflow-x-auto border border-gray-800 rounded-md w-40 ml-5 mb-5 mt-5" to='/'>
        <FaLessThan className="text-orange-500 mr-2" />
        <button><span className="text font-semibold text-orange-500">Previous Page</span></button>
      </NavLink>

      <div className='flex flex-col items-center'>
        {/* Pending Requests Table */}
        <div className='border border-black rounded p-4'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className="font-bold pb-3">Profile Details Approvals/Pending</h1>
            <div className="relative">
              <FaSearch className="absolute left-40 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search all fields..."
                value={pendingSearch}
                onChange={(e) => setPendingSearch(e.target.value)}
                className="border border-gray-400 p-2 pl-8 mb-4 rounded-full"
              />
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-solid border-black p-4 bg-gray-300">
                  <select onChange={(e) => setPendingFilters({ ...pendingFilters, id: e.target.value })} className="bg-gray-300">
                    <option value="">Employee Id</option>
                    {pendingRequests.map(req => (
                      <option key={req.id} value={req.id}>{req.id}</option>
                    ))}
                  </select>
                </th>
                <th className="border border-solid border-black p-4 bg-gray-300">
                  <select onChange={(e) => setPendingFilters({ ...pendingFilters, name: e.target.value })} className="bg-gray-300">
                    <option value="">Employee Name</option>
                    {uniqueNames.map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </th>
                <th className="border border-solid border-black p-4 bg-gray-300">
                  <select onChange={(e) => setPendingFilters({ ...pendingFilters, type: e.target.value })} className="bg-gray-300">
                    <option value="">Field Type</option>
                    {uniqueTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </th>
                <th className="border border-solid border-black p-4 bg-gray-300">Present Field</th>
                <th className="border border-solid border-black p-4 bg-gray-300">New Field</th>
                <th className="border border-solid border-black p-4 bg-gray-300">Actions</th>
                <th className="border border-solid border-black p-4 bg-gray-300">Comments</th>
              </tr>
            </thead>
            <tbody>
              {pendingRequestsToShow.map(req => (
                <tr key={req.id}>
                  <td className="border border-solid border-black p-4">{req.id}</td>
                  <td className="border border-solid border-black p-4">{req.name}</td>
                  <td className="border border-solid border-black p-4">{req.type}</td>
                  <td className="border border-solid border-black p-4">{req.presentField}</td>
                  <td className="border border-solid border-black p-4">{req.newField}</td>
                  <td className="border border-solid border-black p-4">
                    <button onClick={() => handleAction(req, true)} className="bg-green-200 p-1 rounded-full text-green-600 font-bold">
                      <MdCheck className="inline-block text-2xl" />
                    </button>
                    <button onClick={() => handleAction(req, false)} className="bg-red-200 p-1 rounded-full text-red-600 ml-2 font-bold">
                      <MdClose className="inline-block text-2xl" />
                    </button>
                  </td>
                  <td className="border border-solid border-black p-4">{req.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center mt-4">
            <button onClick={() => setPendingPage(pendingPage - 1)} disabled={pendingPage === 0}>
              &lt; 
            </button>
            <span className="mx-4">
              Page {pendingPage + 1} of {totalPendingPages}
            </span>
            <button onClick={() => setPendingPage(pendingPage + 1)} disabled={pendingPage === totalPendingPages - 1}>
              &gt;
            </button>
          </div>
        </div>

        <hr className="my-6 border-t border-red-900 mt-5" />

        {/* Approved/Rejected Requests Table */}
        <div className='border border-black rounded p-6'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className="font-bold pb-3">Approved/Rejected Requests</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search all fields..."
                value={allSearch}
                onChange={(e) => setAllSearch(e.target.value)}
                className="border border-gray-400 p-2 pl-8 mb-4 rounded-full"
              />
              <FaSearch className="absolute left-40 top-3 text-gray-400" />
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-solid border-black p-4 bg-gray-300">
                  <select onChange={(e) => setAllFilters({ ...allFilters, id: e.target.value })} className="bg-gray-300">
                    <option value="">Employee Id</option>
                    {allRequests.map(req => (
                      <option key={req.id} value={req.id}>{req.id}</option>
                    ))}
                  </select>
                </th>
                <th className="border border-solid border-black p-4 bg-gray-300">
                  <select onChange={(e) => setAllFilters({ ...allFilters, name: e.target.value })} className="bg-gray-300">
                    <option value="">Employee Name</option>
                    {[...new Set(allRequests.map(req => req.name))].map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </th>
                <th className="border border-solid border-black p-4 bg-gray-300">
                  <select onChange={(e) => setAllFilters({ ...allFilters, type: e.target.value })} className="bg-gray-300">
                    <option value="">Field Type</option>
                    {[...new Set(allRequests.map(req => req.type))].map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </th>
                <th className="border border-solid border-black p-4 bg-gray-300">Present Field</th>
                <th className="border border-solid border-black p-4 bg-gray-300">New Field</th>
                <th className="border border-solid border-black p-4 bg-gray-300">Status</th>
                <th className="border border-solid border-black p-4 bg-gray-300">Comments</th>
              </tr>
            </thead>
            <tbody>
              {allRequestsToShow.map(req => (
                <tr key={req.id}>
                  <td className="border border-solid border-black p-4">{req.id}</td>
                  <td className="border border-solid border-black p-4">{req.name}</td>
                  <td className="border border-solid border-black p-4">{req.type}</td>
                  <td className="border border-solid border-black p-4">{req.presentField}</td>
                  <td className="border border-solid border-black p-4">{req.newField}</td>
                  <td className="border border-solid border-black p-4">{req.status}</td>
                  <td className="border border-solid border-black p-4">{req.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center mt-4">
            <button onClick={() => setAllPage(allPage - 1)} disabled={allPage === 0}>
              &lt; 
            </button>
            <span className="mx-4">
              Page {allPage + 1} of {totalAllPages}
            </span>
            <button onClick={() => setAllPage(allPage + 1)} disabled={allPage === totalAllPages - 1}>
              &gt;
            </button>
          </div>
        </div>

        {/* Popup for Comments */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-lg">
              <h2 className="font-bold mb-4">Add Comments for {currentRequest?.name}</h2>
              <textarea 
                className="border border-gray-400 p-2 w-full" 
                rows="4" 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              {showValidationError && <p className="text-red-600">Comments are mandatory.</p>}
              <div className="flex justify-end mt-4">
                <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                <button onClick={() => setShowPopup(false)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileDetailsApproval;
