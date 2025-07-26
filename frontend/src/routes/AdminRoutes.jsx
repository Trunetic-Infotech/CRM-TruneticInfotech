// routes/AdminRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";

import Departments from "../pages/admin/company/departments";
import Designations from "../pages/admin/company/Designations";
import AllEmployees from "../pages/admin/employees/AllEmployees";
import AddEmployee from "../pages/admin/employees/AddEmployee";
import EmployeeTypes from "../pages/admin/employees/EmployeeTypes";
import Attendance from "../pages/admin/employees/Attendance";
import AllProjects from "../pages/admin/projects/AllProjects";
import CreateProject from "../pages/admin/projects/CreateProject";
import ProjectCategories from "../pages/admin/projects/ProjectCategories";
import AllClients from "../pages/admin/clients/AllClients";
import AddClient from "../pages/admin/clients/AddClient";
import LeaveRequests from "../pages/admin/hr&payroll/LeaveRequests";
import Salaries from "../pages/admin/hr&payroll/Salaries";
import PaySlips from "../pages/admin/hr&payroll/PaySlips";
import Expenses from "../pages/admin/finance/Expenses";
import ProjectReports from "../pages/admin/reports/ProjectReports";


const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<Navigate to="dashboard" />} /> 
        <Route path="dashboard" element={<AdminDashboard />} />

        {/* Company */}
        <Route path="/company/departments" element={<Departments />}/>
        <Route path="/company/designations" element={<Designations />}/>

        {/* Employees */}
        <Route path="/employees/all-emplyees" element={<AllEmployees />}/>
        <Route path="/employees/add" element={<AddEmployee />}/>
        <Route path="/employees/types" element={<EmployeeTypes />}/>
        <Route path="/employees/attendance" element={<Attendance />}/>
        
        {/* Projects */}
        <Route path="projects/all-projects" element={<AllProjects />} />
        <Route path="projects/create" element={<CreateProject />} />
        <Route path="projects/categories" element={<ProjectCategories />} />


        {/*Clients  */}
        <Route path="clients/all-clients" element={<AllClients />}/>
        <Route path="clients/add-clients" element={<AddClient />}/>


        {/* Hr & Payroll */}
        <Route path="hr/leave-requests" element={<LeaveRequests />}/>
        <Route path="hr/salaries" element={<Salaries />}/>
        <Route path="hr/payslips" element={<PaySlips />}/>
  
        {/* Finanace */}
        <Route path="finance/expenses" element={<Expenses />}/>

        {/* Reports */}
        <Route path="reports/projects" element={<ProjectReports />}/>

      </Routes>
    </AdminLayout>
  );
};


export default AdminRoutes;
