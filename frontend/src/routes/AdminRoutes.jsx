// routes/AdminRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";


import Projects from "../pages/admin/Projects";
import Departments from "../pages/admin/company/departments";


const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="/company/departments" element={<Departments />}/>
        <Route path="projects" element={<Projects />} />
      </Routes>
    </AdminLayout>
  );
};


export default AdminRoutes;
