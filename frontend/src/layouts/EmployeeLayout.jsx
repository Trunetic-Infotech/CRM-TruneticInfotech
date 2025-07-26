import { FiMenu } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import { employeeMenu } from "../constants/sidebarMenus";
import { useState } from "react";


const EmployeeLayout = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
           {/* Hamburger Icon (Mobile only when sidebar is closed) */}
      {!isSidebarOpen && (
        <FiMenu
          size={28}
          className=" md:hidden absolute top-6 left-1"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

              <div className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <Sidebar
          menuItems={employeeMenu}
          title="Project Manager Panel"
          onClose={() => setIsSidebarOpen(false)}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
            {/* <Sidebar menuItems={projectManagerMenu} title="Project Manager Panel"/> */}
            <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
    )
}

export default EmployeeLayout;