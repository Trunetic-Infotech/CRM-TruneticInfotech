import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Sidebar = ({ menuItems, title = "Dashboard", setIsSidebarOpen }) => {
  const location = useLocation();
  const [openSubmenus, setOpenSubmenus] = useState({});

  // Auto-expand submenus based on current path
  useEffect(() => {
    const newOpenStates = {};
    menuItems.forEach((item) => {
      if (item.submenu) {
        item.submenu.forEach((sub) => {
          if (location.pathname.startsWith(sub.path)) {
            newOpenStates[item.label] = true;
          }
        });
      }
    });
    setOpenSubmenus(newOpenStates);
  }, [location.pathname, menuItems]);

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 px-4 py-2 rounded-lg text-white bg-blue-600 font-semibold"
      : "flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition";

  return (
    <aside className="w-64 h-screen bg-white shadow-md border-r border-gray-200 p-4 overflow-y-auto   absolute md:relative  z-10">
      {setIsSidebarOpen && (
   <FiX
    size={26}
    className="absolute top-2 right-2 md:hidden cursor-pointer text-gray-600 hover:text-red-600"
    onClick={() => setIsSidebarOpen(false)}
  />
)}

      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center tracking-wide">
        {title}
      </h2>

      <nav className="flex flex-col gap-1">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition font-medium"
                >
                  <span className="flex items-center gap-3">
                    {item.icon} {item.label}
                  </span>
                  <span className="text-sm">
                    {openSubmenus[item.label] ? "▲" : "▼"}
                  </span>
                </button>
                {openSubmenus[item.label] && (
                  <div className="ml-6 mt-2 flex flex-col gap-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className={navLinkClasses}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        ▸ {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={item.path}
                className={navLinkClasses}
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.icon} {item.label}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
