import React from "react";
import Logo from "../assets/logo.png";
import admin from "../assets/admin.png";
import hr from "../assets/hr-manager.png";
import projectManager from "../assets/project-manager.png";
import employee from "../assets/employee.png";
import client from "../assets/client.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const roles = [
    { role: "Admin", icon: admin },
    { role: "Human Resource", icon: hr },
    { role: "Project Manager", icon: projectManager },
    { role: "Employee", icon: employee },
   
  ];
  

  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    const formattedRole = role.toLowerCase().replace(/\s+/g, "-");
    navigate(`/login/${formattedRole}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen w-screen flex flex-col justify-between">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-10 p-8">
        <img
          src={Logo}
          alt="Company Logo"
          className="h-48 w-auto object-contain"
        />

        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            TRUNETIC INFOTECH PVT LTD
          </h1>
          <p className="text-2xl text-gray-600 text-center">
            Welcome to the CRM System!
          </p>
          <p className="text-lg text-gray-500 text-center">
            Manage, Collaborate, and Grow Efficiently
          </p>
        </div>
      </div>

      {/* Role Selection */}
      <div className="flex flex-col items-center gap-6 px-4">
        <p className="text-xl font-semibold text-gray-700 text-center">
          Who are you? <br />
          <span>
            Select your <span className="text-blue-700 font-bold">Role</span>{" "}
            below:
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-4 px-4">
          {roles.map((role, index) => (
            <button
              onClick={() => handleRoleClick(role.role)}
              key={index}
              className="w-72 h-40 bg-white rounded-xl shadow-md border border-gray-200 
                 flex flex-col items-center justify-center gap-3
                 text-2xl font-semibold text-gray-700 
                 hover:shadow-xl hover:scale-105 hover:border-blue-500 hover:text-blue-600 
                 transition-transform duration-300 ease-in-out"
            >
              <img
                src={role.icon}
                alt={`${role.role} icon`}
                className="h-12 w-12 object-contain"
              />
              {role.role}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center p-6 text-sm text-gray-500">
        <p className="mb-1 font-medium text-lg">Need Help?</p>
        <p className="text-xl"> support@truneticinfotech.com</p>
      </div>
    </div>
  );
};

export default Home;
