import { Navigate, Route, Routes } from "react-router-dom"
import HRLayout from "../layouts/HRLayout"
import HRDashboard from "../pages/hr/HRDashboard"
import Employees from "../pages/hr/Employees"
import Recruitment from "../pages/hr/Recruitment"
import Attendance from "../pages/hr/Attendance"
import Leave from "../pages/hr/Leave"
import Payroll from "../pages/hr/Payroll"
import EmployeeDetails from "../pages/hr/SubComponents/EmployeeDetails"
import Performance from "../pages/hr/SubComponents/Performance"
import Training from "../pages/hr/SubComponents/Training"
import Onboarding from "../pages/hr/SubComponents/Onboarding"
import Application from "../pages/hr/SubComponents/Application"
import LeaveStatus from "../pages/hr/SubComponents/LeaveStatus"
import LeaveApply from './../pages/hr/SubComponents/LeaveApply';
import SalaryStructure from "../pages/hr/SubComponents/SalaryStructure"
import Payslips from './../pages/hr/SubComponents/Payslips';
import AttendanceMark from './../pages/hr/SubComponents/AttendanceMark';
import AttendanceRecords from './../pages/hr/SubComponents/AttendanceRecords';
import Interviews from './../pages/hr/SubComponents/Interviews';


const HRRoutes = ()=> {
    return (
        <HRLayout>
            <Routes>
                <Route index element={<Navigate to="dashboard" />}/>
                <Route path="dashboard" element={<HRDashboard />}/>
                <Route path="employees" element={<Employees />} />
                <Route path="recruitment" element={<Recruitment />} />
                <Route path="attendance" element={<Attendance />} />
                <Route path="leave" element={<Leave />} />
                <Route path="payroll" element={<Payroll />} />
                <Route path="employee/details" element={<EmployeeDetails />} />
                <Route path="performance" element={<Performance />} />
                <Route path="training" element={<Training />} />
                <Route path="onboarding" element={<Onboarding />} />
                <Route path="*" element={<Navigate to="dashboard" />} />
                <Route path="recruitment/job-openings" element={<Application />} />
                <Route path="leave/apply" element={<LeaveApply />} />
                <Route path="leave/status" element={<LeaveStatus />} />
                <Route path="payroll/salary-structure" element={<SalaryStructure />} />
                <Route path="payroll/payslips" element={<Payslips />} />
                <Route path="attendance/mark"  element={<AttendanceMark />} />
                <Route path="attendance/records"  element={<AttendanceRecords />} />
                <Route path="recruitment/applications" element={<Application />} />
                <Route path="recruitment/interviews" element={<Interviews />} />
            </Routes>
        </HRLayout>
    )
} 

export default HRRoutes