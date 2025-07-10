import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Optional logo

const Login = () => {
  const { role } = useParams();

  const displayRole = role.replace('-', ' '); // e.g., "project-manager" → "project manager"

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 space-y-6">
        {/* Logo and Role Title */}
        <div className="flex flex-col items-center space-y-2">
          <img src={Logo} alt="Company Logo" className="h-16" />
          <h1 className="text-2xl font-bold text-gray-800 capitalize">
            {displayRole} Login
          </h1>
          <p className="text-sm text-gray-500">Welcome back! Please log in to continue.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={(e)=> {
            e.preventDefault();

            if(role === "admin"){
                navigate('/admin/dashboard')
            }else if (role === "human-resource"){
                navigate('/hr/dashboard')
            }else if (role === "project-manager"){
                navigate('/project-manager/dashboard')
            }else if (role === "employee"){
                navigate('/employee/dashboard')
            }else if (role === "client"){
                navigate('/client/dashboard')
            }else{
                alert("Work in progress! Coming Soon!")
            }
        }} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 pt-2">
          © 2025 Trunetic Infotech Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
