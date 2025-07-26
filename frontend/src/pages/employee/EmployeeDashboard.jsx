import React from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const EmployeeIcon = [
  { label: "Task Assign", data: "4", icon: "👥" },
  { label: "Pending Tasks", data: "8", icon: "👨‍💼" },
  { label: "Working Hours", data: "5", icon: "🏢" },
  { label: "Leave Balance", data: "3", icon: "📽️" },
];

const TaskStatus = [
  {
    title: "Complete Q4 Report",
    status: "In Progress",
    description:
      "Prepare comprehensive quarterly report with analytics and insights",
    priority: "High",
    dueDate: "2024-01-15",
  },
  {
    title: "Update User Documentation",
    status: "Pending",
    description: "Review and update user manual for new features",
    priority: "Medium",
    dueDate: "2024-01-20",
  },
  {
    title: "Code Review – Payment Module",
    status: "Completed",
    description: "Review payment integration code and provide feedback",
    priority: "Low",
    dueDate: "2024-01-10",
  },
  {
    title: "Fix UI Bugs in Dashboard",
    status: "In Progress",
    description: "Identify and fix reported layout bugs in admin dashboard",
    priority: "High",
    dueDate: "2024-01-18",
  },
];

const TaskStatusIcon = [
  { label: "Submitted Works", link: "/employee/tasks", data: "4", icon: "📝" },
  { label: "Attendance", link: "/employee/attendance", data: "8", icon: "📅" },
  { label: "Apply Leave", link: "/employee/leave", data: "5", icon: "🌴" },
  { label: "View Profile", link: "/employee/profile", data: "", icon: "👤" },
  { label: "Payslips", link: "/employee/salary", data: "3", icon: "💰" },
  {
    label: "Performance",
    link: "/employee/performance",
    data: "2",
    icon: "📈",
  },
  {
    label: "Notifications",
    link: "/employee/notifications",
    data: "6",
    icon: "🔔",
  },
  { label: "Company Events", link: "/employee/events", data: "1", icon: "🎉" },
  { label: "Team Directory", link: "/employee/team", data: "", icon: "👥" },
];

const SummaryCards = [
  { label: "Check In Time", value: "09:00", icon: "⏰" },
  { label: "Hours Worked", value: "8h", icon: "💼" },
  { label: "Pending Tasks", value: "2", icon: "📋" },
];

const EmployeeDashboard = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-0 md:gap-2 justify-between">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold pl-7 md:pl-0">
          Welcome my dashboard!
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 pl-7 md:pl-0">
          Welcome back! Here's your work overview for today.
        </p>
      </div>
      <div className="mt-2">
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-between space-x-2">
          {EmployeeIcon.map((item, index) => (
            <Card
              key={index}
              label={item.label}
              data={item.data}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="bg-white w-full p-6 rounded-lg">
            <div className="flex justify-between">
              <h5 className="font-semibold ">Recent Tasks</h5>
              <span className="text-blue-600 cursor-pointer">View All</span>
            </div>
            <div className="mt-6 px-4">
              <div className="grid grid-cols-1  gap-6">
                {TaskStatus.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out group"
                  >
                    {/* Title and Description */}
                    <div className="flex justify-between b-4 ">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                        {item.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                          item.priority === "Completed"
                            ? "bg-green-100 text-green-800"
                            : item.priority === "High"
                            ? "bg-red-300 text-red-800"
                            : item.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-200 text-black"
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Status and Due Date */}
                    <div className="flex items-center justify-between mt-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                          item.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : item.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {item.status}
                      </span>
                      <span className="text-sm text-gray-400">
                        {item.dueDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white w-full p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h5 className="font-semibold ">Quick Links</h5>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {TaskStatusIcon.map((item, index) => (
                  <Link
                    to={item.link}
                    key={index}
                    className="flex items-center gap-4 bg-white p-6 border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition duration-200 ease-in-out hover:bg-slate-50 cursor-pointer group"
                  >
                    <div className="text-4xl text-blue-600 group-hover:scale-110 transform transition">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-gray-800 group-hover:text-blue-700">
                        {item.label}
                      </span>
                      {item.data && (
                        <span className="text-sm text-gray-500">
                          {item.data}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-white w-full p-6 rounded-lg shadow-md">
          <div className="flex justify-between">
            <h5 className="font-semibold ">Today's Summary</h5>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {SummaryCards.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200"
                >
                  <div className="text-3xl text-indigo-600">{item.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="text-xl font-semibold text-gray-800">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
