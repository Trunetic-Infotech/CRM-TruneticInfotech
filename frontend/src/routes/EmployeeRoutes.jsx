import { Navigate, Route, Routes } from "react-router-dom"
import EmployeeLayout from "../layouts/EmployeeLayout"
import EmployeeDashboard from "../pages/employee/EmployeeDashboard"





const EmployeeRoutes = ()=>{
    return (
        <EmployeeLayout>
            <Routes >
                <Route  indexed element={<Navigate to="dashboard" />}/>
                <Route path="dashboard" element={<EmployeeDashboard />}/>
            </Routes>
        </EmployeeLayout>
    )
}

export default EmployeeRoutes;