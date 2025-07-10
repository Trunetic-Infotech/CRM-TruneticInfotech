import { Navigate, Route, Routes } from "react-router-dom"
import ClientLayout from "../layouts/ClientLayout"
import ClientDashboard from "../pages/client/ClientDashboard"





const ClientRoutes = () => {
    return (
        <ClientLayout>
            <Routes>
                <Route indexed element={<Navigate to="dashboard" />}/>
                <Route to="dashboard" element={<ClientDashboard />} />
            </Routes>
        </ClientLayout>
    )
}


export default ClientRoutes;