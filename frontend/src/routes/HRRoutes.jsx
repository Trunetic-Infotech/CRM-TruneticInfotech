import { Navigate, Route, Routes } from "react-router-dom"
import HRLayout from "../layouts/HRLayout"
import HRDashboard from "../pages/hr/HRDashboard"
import Employees from "../pages/hr/Employees"


const HRRoutes = ()=> {
    return (
        <HRLayout>
            <Routes>
                <Route index element={<Navigate to="dashboard" />}/>
                <Route path="dashboard" element={<HRDashboard />}/>
                <Route path="employees" element={<Employees />} />
            </Routes>
        </HRLayout>
    )
} 

export default HRRoutes