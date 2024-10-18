import ApprovalMaster from "./ApprovalMaster";
import LeaveApproval from "./LeaveApproval";
import {Routes, Route} from "react-router-dom";
import AttendanceApproval from "./AttendanceApproval";
import ProfileDetailsApproval from "./ProfileDetailsApproval";
import ResignationApproval from "./ResignationApproval";


function App() {
  return (
    
    <>
    <Routes>
    <Route path='/' element={<ApprovalMaster/>}/>
    <Route path='/LeaveApproval' element={<LeaveApproval/>}/>
    <Route path='/AttendanceApproval' element={<AttendanceApproval/>}/>
    <Route path='/ProfileDetailsApproval' element={<ProfileDetailsApproval/>}/>
    <Route path='/ResignationApproval' element={<ResignationApproval/>}/>

    </Routes>
    </>
  );
}

export default App;
