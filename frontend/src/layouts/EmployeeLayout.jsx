import Sidebar from "../components/Sidebar";
import { employeeMenu } from "../constants/sidebarMenus";


const EmployeeLayout = ({children}) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar menuItems={employeeMenu} title="Employee Panel" />
            <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
    )
}

export default EmployeeLayout;