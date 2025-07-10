import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { adminMenu } from "../constants/sidebarMenus";
import { FiMenu } from "react-icons/fi";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Hamburger Icon (Mobile only when sidebar is closed) */}
      {!isSidebarOpen && (
        <FiMenu
          size={28}
          className=" md:hidden absolute top-2 left-2"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* Sidebar (always visible on md+, toggleable on mobile) */}
      <div className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <Sidebar
          menuItems={adminMenu}
          title="Admin Panel"
          onClose={() => setIsSidebarOpen(false)}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      {/* Main Content */}
      <main className="md:flex-1 w-[100%] overflow-y-auto p-4 ">{children}</main>
    </div>
  );
};

export default AdminLayout;
