import React from 'react'

function TableInput() {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Employee Id</label>
        <input className='border border-black' type="text" name="employeeId" />
        <label>Employee Name</label>
        <input className='border border-black' type="text" name="employeeName" />
        <label>Leave Type</label>
        <input className='border border-black' type="text" name="leaveType" />
        <label>From Date</label>
        <input className='border border-black' type="date" name="fromDate" />
        <label>TO Date</label>
        <input className='border border-black' type="date" name="toDate" />
        <button className='border border-black' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TableInput
