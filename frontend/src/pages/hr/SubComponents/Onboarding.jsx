import {
  Briefcase,
  Building,
  Calendar,
  Edit,
  Eye,
  MoreHorizontal,
  Plus,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import Table from "../../../components/Table";

const Summary = [
  { key: "documents", label: "Documents", icon: "📄" },
  { key: "tasks", label: "Tasks", icon: "📋" },
  { key: "overdue-tasks", label: "Overdue Tasks", icon: "✅" },
];

const onboardingTemplatesTasks = [
  {
    id: 1,
    name: "Onboarding Template 1",
    description: "This is the first onboarding template.",
    department: "Development",
    duration: "2 weeks",
  },
  {
    id: 2,
    name: "Onboarding Template 2",
    description: "This is the second onboarding template.",
    department: "Product",
    duration: "3 weeks",
  },
  {
    id: 3,
    name: "Onboarding Template 3",
    description: "This is the third onboarding template.",
    department: "Design",
    duration: "4 weeks",
  },
];

const departments = ["Development", "Product", "Design", "Marketing", "Sales"];
const employeesData = [
  {
    id: 101,
    name: "Alice Carter",
    manager: "John Doe",
    department: "Engineering",
    projects: 5,
    budget: "$12,000",
    extension: "2345",
  },
  {
    id: 102,
    name: "Brian Kim",
    manager: "Sara Smith",
    department: "Human Resources",
    projects: 2,
    budget: "$4,000",
    extension: "2310",
  },
  {
    id: 103,
    name: "Carlos Rivera",
    manager: "Nina Patel",
    department: "Design",
    projects: 4,
    budget: "$7,500",
    extension: "2351",
  },
  {
    id: 104,
    name: "Diana Xu",
    manager: "John Doe",
    department: "Engineering",
    projects: 6,
    budget: "$10,500",
    extension: "2367",
  },
  {
    id: 105,
    name: "Ethan Morgan",
    manager: "Sara Smith",
    department: "HR",
    projects: 1,
    budget: "$2,200",
    extension: "2330",
  },
];
const columns = [
  { name: "ID", accessor: "id" },
  { name: "Name", accessor: "name" },
  { name: "Manager", accessor: "manager" },
  { name: "Department", accessor: "department" },
  { name: "Active Projects", accessor: "projects" },
  { name: "Budget", accessor: "budget" },
  { name: "Extension", accessor: "extension" },
  { name: "Actions", accessor: "actions" },
];


const employees = [
  {
    id: 1,
    name: "John Doe",
    department: "Development",
    position: "Software Engineer",
    projects: 8,
    status: "active",
    manager: "Jane Smith",
    budget: "$95,000",
    extension: "E1001",
  },
];

const Onboarding = () => {
  const [activeTab, setActiveTab] = useState("documents");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-500 bg-green-100";
      case "on leave":
        return "text-yellow-500 bg-yellow-100";
      case "inactive":
        return "text-red-500 bg-red-100";
      case "pending":
        return "text-orange-500 bg-orange-100";
      case "verified":
        return "text-blue-500 bg-blue-100";
      case "rejected":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "" || employee.type === selectedType;
    const matchesStatus =
      selectedStatus === "" || employee.status === selectedStatus;
    const matchesDepartment =
      selectedDepartment === "all" ||
      employee.department === selectedDepartment;
    return matchesSearch && matchesType && matchesStatus && matchesDepartment;
  });

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Employee Onboarding</h1>
      <p className="text-gray-600">Manage Employee Onboarding</p>

      {/* Tab Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Summary.map((tab, i) => (
          <div
            key={i}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-3 p-4 cursor-pointer rounded-lg border ${
              activeTab === tab.key
                ? "bg-blue-100 border-blue-500 text-blue-800 font-semibold"
                : "hover:bg-gray-50"
            }`}
          >
            <span className="text-2xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </div>
        ))}
      </div>

      <hr className="border-gray-300" />

      {/* Tab Content */}
      <div className="mt-6">
        {/* {activeTab === "overview" && (
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p>Overview content goes here...</p>
          </div>
        )} */}
        {activeTab === "documents" && (
          <div>
            <h2 className="text-xl font-semibold p-6">Documents Verify</h2>

            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row justify-between w-full bg-white p-6 rounded-lg border-2 border-gray-300 gap-4">
              {/* Search */}
              <div className="w-full lg:w-1/2 relative">
                <input
                  type="text"
                  className="border-2 rounded-md p-2 border-gray-300 text-xl w-full pl-10"
                  placeholder="Search employees by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="text-gray-400 w-5 h-5 absolute top-3.5 left-3.5" />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center justify-end w-full lg:w-1/2">
                <div className="flex gap-2 items-center">
                  <FiFilter size={20} className="text-gray-400" />
                  <select
                    className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    <option value="all">All Departments</option>
                    {departments.map((dept, i) => (
                      <option key={i} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <select
                  className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="joining">Joining Docs</option>
                  <option value="id">ID Proof</option>
                </select>

                <select
                  className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="verified">Verified</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Employee Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={employee.avatar}
                        alt={employee.name}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {employee.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {employee.position}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Building className="h-4 w-4 mr-2" />
                      {employee.department}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Started {employee.startDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-2" />
                      Manager: {employee.manager}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Progress
                      </span>
                      <span className="text-sm text-gray-500">
                        {employee.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${employee.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        employee.status
                      )}`}
                    >
                      {employee.status.replace("-", " ").toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 p-1 rounded hover:bg-blue-50">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 p-1 rounded hover:bg-gray-50">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Task Summary */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        {employee.tasks?.filter((t) => t.status === "completed")
                          .length || 0}{" "}
                        of {employee.tasks?.length || 0} tasks completed
                      </span>

                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        View Tasks
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* </div>
        )} */}
        {activeTab === "tasks" && (
          <div>
            <h2 className="text-xl font-semibold p-6"> Tasks Managements</h2>

            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row justify-between w-full bg-white p-6 rounded-lg border-2 border-gray-300 gap-4">
              {/* Search */}
              <div className="w-full lg:w-1/2 relative">
                <input
                  type="text"
                  className="border-2 rounded-md p-2 border-gray-300 text-xl w-full pl-10"
                  placeholder="Search employees by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="text-gray-400 w-5 h-5 absolute top-3.5 left-3.5" />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center justify-end w-full lg:w-1/2">
                <div className="flex gap-2 items-center">
                  <FiFilter size={20} className="text-gray-400" />
                  <select
                    className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    <option value="all">All Departments</option>
                    {departments.map((dept, i) => (
                      <option key={i} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <select
                  className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="joining">Joining Docs</option>
                  <option value="id">ID Proof</option>
                </select>

                <button
                  className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                  onClick={() => setShowModal(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {onboardingTemplatesTasks.map((template) => (
                <div
                  key={template.id}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {template.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Department:</span>
                      <span className="font-medium text-gray-900">
                        {template.department}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-900">
                        {template.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Tasks:</span>
                      <span className="font-medium text-gray-900">
                        {template.tasks}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      Edit
                    </button>
                    <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      publish Task To new Employee
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "overdue-tasks" && (
          <div>
            <h2 className="text-xl font-semibold p-6">
              {" "}
              Checking and Overdue task
            </h2>

            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row justify-between w-full bg-white p-6 rounded-lg border-2 border-gray-300 gap-4">
              {/* Search */}
              <div className="w-full lg:w-1/2 relative">
                <input
                  type="text"
                  className="border-2 rounded-md p-2 border-gray-300 text-xl w-full pl-10"
                  placeholder="Search employees by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="text-gray-400 w-5 h-5 absolute top-3.5 left-3.5" />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center justify-end w-full lg:w-1/2">
                <div className="flex gap-2 items-center">
                  <FiFilter size={20} className="text-gray-400" />
                  <select
                    className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    <option value="all">All Departments</option>
                    {departments.map((dept, i) => (
                      <option key={i} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <select
                  className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="joining">Joining Docs</option>
                  <option value="id">ID Proof</option>
                </select>

                <select
                  className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="verified">Verified</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

                <Table columns={columns} data={employeesData}  onEdit={(row) => console.log("Edit", row)}
        onDelete={(id) => console.log("Delete", id)} />
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-[90%] max-w-lg space-y-4">
              <h2 className="text-xl font-bold">Add New Task</h2>
              <input
                type="text"
                placeholder="Task Name"
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                placeholder="Task Description"
                className="w-full border px-3 py-2 rounded"
              ></textarea>
              <div className="flex justify-end gap-3">
                <button
                  className="px-4 py-2 border rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={() => setShowModal(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
