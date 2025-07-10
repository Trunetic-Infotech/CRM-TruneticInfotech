import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { hrMenu } from "../constants/sidebarMenus";
import { useEffect } from "react";

const HRLayout = ({children}) => {
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     navigate('/hr/employees')
    // },[])
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar menuItems={hrMenu} title="Human Resource Panel"/>
            <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
    )
}

export default HRLayout;