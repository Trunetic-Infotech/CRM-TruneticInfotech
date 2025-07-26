import { Navigate, Route, Routes } from "react-router-dom"
import EmployeeLayout from "../layouts/EmployeeLayout"
import EmployeeDashboard from "../pages/employee/EmployeeDashboard"
import Tasks from "../pages/employee/SubComponents/Tasks"
import SubmitWork from './../pages/employee/SubComponents/SubmitWork';
import ProjectsDetails from './../pages/employee/SubComponents/ProjectsDetails';
import AttendanceMark from "../pages/hr/SubComponents/AttendanceMark";
import AttendanceRecords from "../pages/hr/SubComponents/AttendanceRecords";
import LeaveApply from "../pages/hr/SubComponents/LeaveApply";
import LeaveStatus from "../pages/hr/SubComponents/LeaveStatus";
import EmpProfile from "../pages/employee/SubComponents/EmpProfile";
import PayslipEmployee from "../pages/employee/SubComponents/PayslipEmployee";
import ChatEmp from './../pages/employee/SubComponents/ChatEmp';
import Meetings from './../pages/employee/SubComponents/Meetings';





const EmployeeRoutes = ()=>{
    return (
        <EmployeeLayout>
            <Routes >
                <Route  indexed element={<Navigate to="dashboard" />}/>
                <Route path="dashboard" element={<EmployeeDashboard />}/>
                   <Route path="tasks" element={<Tasks />}/>
                   <Route path="submit" element={<SubmitWork />}/>
                     <Route path="projects" element={<ProjectsDetails />}/>
                     <Route path="attendance/mark" element={<AttendanceMark />}/>
                     <Route path="attendance/records" element={<AttendanceRecords />}/>
                       <Route path="leave/apply" element={<LeaveApply />}/>
                         <Route path="leave/status" element={<LeaveStatus />}/>
                          <Route path="profile" element={<EmpProfile />}/>
                          <Route path="payslip" element={<PayslipEmployee />}/>
                <Route path="*" element={<Navigate to="dashboard" />} />
                 <Route path="chat" element={<ChatEmp />}/>
                 <Route path="meetings" element={<Meetings />}/>
            </Routes>
        </EmployeeLayout>
    )
}

export default EmployeeRoutes;