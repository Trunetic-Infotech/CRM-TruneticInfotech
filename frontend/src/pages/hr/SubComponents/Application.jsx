import { Briefcase, DollarSign, Download, Mail, MoreHorizontal, Plus, Star } from "lucide-react";
import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiFilter, FiPlus } from "react-icons/fi";
import Table from "../../../components/Table";

const Summary = [
  { key: "Job Requirements", label: "Job Requirements", icon: "📄" },
  { key: "Applications", label: "Applications", icon: "📋" },
  { key: "Interview Schedule", label: "Interview Schedule", icon: "✅" },
];

const departments = ["Engineering", "Product", "Marketing", "Sales"];

const columns = [
  { name: "ID", accessor: "id" },
  { name: "Name", accessor: "name" },
  { name: "Position", accessor: "Position" },
  { name: "Department", accessor: "department" },
  { name: "Interviews_Details", accessor: "Interviews_Details" },
  { name: "Interviews", accessor: "Interviews" },
  { name: "Status", accessor: "Status" },
  { name: "Actions", accessor: "actions" },
];

const employeesData = [
  {
    id: 101,
    name: "Alice Carter",
    Position: "Software Engineer",
    department: "Engineering",
    Interviews_Details: "video2024-01-22 at 14:00 (60min)Video Call",
    Interviews: "David Kim David.k@company.com",
    Status: "Scheduled",
    actions: "Edit | Delete",
  },
];


const applications = [
  {
    id: 1,
    candidateName: "Amit Sharma",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    candidateEmail: "amit.sharma@example.com",
    currentRole: "Frontend Developer",
    experience: 3,
    expectedSalary: 85000,
    status: "pending",
    rating: 4.2,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"]
  },
  {
    id: 2,
    candidateName: "Priya Mehta",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    candidateEmail: "priya.mehta@example.com",
    currentRole: "Backend Engineer",
    experience: 5,
    expectedSalary: 100000,
    status: "completed",
    rating: 4.7,
    skills: ["Node.js", "Express", "MongoDB", "Docker"]
  },
  {
    id: 3,
    candidateName: "Ravi Verma",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    candidateEmail: "ravi.verma@example.com",
    currentRole: "Full Stack Developer",
    experience: 4,
    expectedSalary: 95000,
    status: "not assigned",
    rating: 3.8,
    skills: ["React", "Node.js", "GraphQL", "AWS"]
  },
  {
    id: 4,
    candidateName: "Sneha Iyer",
    avatar: "https://randomuser.me/api/portraits/women/85.jpg",
    candidateEmail: "sneha.iyer@example.com",
    currentRole: "UI/UX Designer",
    experience: 2,
    expectedSalary: 70000,
    status: "pending",
    rating: 4.0,
    skills: ["Figma", "Sketch", "Adobe XD", "CSS"]
  },
  {
    id: 5,
    candidateName: "Manoj Kulkarni",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    candidateEmail: "manoj.kulkarni@example.com",
    currentRole: "DevOps Engineer",
    experience: 6,
    expectedSalary: 120000,
    status: "completed",
    rating: 4.6,
    skills: ["Kubernetes", "Terraform", "CI/CD", "AWS", "Linux"]
  }
];


const Application = () => {
  const [activeTab, setActiveTab] = useState("Job Requirements");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showModal, setShowModal] = useState(false);
const [date, setDate] = useState(null);
const [time, setTime] = useState(null);
const [showRequiredModal, setShowRequiredModal] = useState(false);
   const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-orange-500 bg-orange-100";
      case "completed":
        return "text-green-500 bg-green-100";
      case "not assigned":
        return "text-gray-500 bg-gray-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };
  const handleScheduleInterview = () => {
    // Logic to schedule the interview
    setShowModal(false);
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Employee Applications</h1>
      <p className="text-gray-600">
        Manage your employee applications, interviews, and more
      </p>

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

      {/* Content Area */}
      <div className="mt-6">
        {activeTab === "Job Requirements" && 
        
         <div>
    <h2 className="text-2xl font-semibold p-4">Job Requirements</h2>

    {/* Filter Bar */}
    <div className="flex flex-col lg:flex-row justify-between w-full bg-white p-6 rounded-lg border-2 border-gray-300 gap-4 mb-6">
      {/* Search Input */}
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
        {/* Department Filter */}
        <div className="flex gap-2 items-center">
          <FiFilter size={20} className="text-gray-400" />
          <select
            className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="all">All Departments</option>
            {departments.map((dept, i) => (
              <option key={i} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Type Filter */}
        <select
          className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="joining">Completed</option>
          <option value="id">Pending</option>
          <option value="id">Not Assigned</option>
        </select>

        {/* Add New Button */}
        <button
          className="flex items-center border-2 border-gray-300 px-4 py-2 rounded-md text-base hover:bg-blue-500"
          onClick={() => setShowRequiredModal(true)}
        >
          <FiPlus className="w-4 h-4 mr-2 " />
          Add New Requirement
        </button>
      </div>
    </div>

    {/* Applications Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {applications.map((application) => (
        <div
          key={application.id}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={application.avatar}
                alt={application.candidateName}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{application.candidateName}</h3>
                <p className="text-sm text-gray-500">{application.currentRole}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" /> {application.candidateEmail}
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-2" /> {application.experience} years experience
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" /> Expected: ${application.expectedSalary.toLocaleString()}
            </div>
          </div>

          {/* Status + Rating */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
              {application.status.toUpperCase()}
            </span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-sm font-medium text-gray-900">{application.rating}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1 mb-4">
            {application.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
              >
                {skill}
              </span>
            ))}
            {application.skills.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                +{application.skills.length - 3} more
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <button className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              View Profile
            </button>
            <button
              onClick={() => handleScheduleInterview(application.id)}
              className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
            >
              Schedule Interview
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
        
        }













    {activeTab === "Applications" && (
  <div>
    <h2 className="text-2xl font-semibold p-4">Interview Schedule</h2>

    {/* Filter Bar */}
    <div className="flex flex-col lg:flex-row justify-between w-full bg-white p-6 rounded-lg border-2 border-gray-300 gap-4 mb-6">
      {/* Search Input */}
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
        {/* Department Filter */}
        <div className="flex gap-2 items-center">
          <FiFilter size={20} className="text-gray-400" />
          <select
            className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="all">All Departments</option>
            {departments.map((dept, i) => (
              <option key={i} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Type Filter */}
        <select
          className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="joining">Completed</option>
          <option value="id">Pending</option>
          <option value="id">Not Assigned</option>
        </select>

        {/* Add New Button */}
        <button
          className="flex items-center border-2 border-gray-300 px-4 py-2 rounded-md text-base hover:bg-blue-500"
        >
          <Download className="w-4 h-4 mr-2" />
          Export Applications
        </button>
      </div>
    </div>

    {/* Applications Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {applications.map((application) => (
        <div
          key={application.id}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={application.avatar}
                alt={application.candidateName}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{application.candidateName}</h3>
                <p className="text-sm text-gray-500">{application.currentRole}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" /> {application.candidateEmail}
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-2" /> {application.experience} years experience
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" /> Expected: ${application.expectedSalary.toLocaleString()}
            </div>
          </div>

          {/* Status + Rating */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
              {application.status.toUpperCase()}
            </span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-sm font-medium text-gray-900">{application.rating}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1 mb-4">
            {application.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
              >
                {skill}
              </span>
            ))}
            {application.skills.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                +{application.skills.length - 3} more
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <button className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              View Profile
            </button>
            <button
              onClick={() => handleScheduleInterview(application.id)}
              className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
            >
              Schedule Interview
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

    




      
      {activeTab === "Interview Schedule" && (
        <div>
          <h2 className="text-2xl font-semibold p-4">Interview Schedule</h2>
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
                <option value="joining">Compeleted</option>
                <option value="id">Pending</option>
                <option value="id">Not Assigned</option>
              </select>

              <button
                className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                onClick={() => setShowModal(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Schedule Interviews
              </button>
            </div>
          </div>
          {/* Modal for Scheduling Interviews */}
          <Table
            columns={columns}
            data={employeesData}
            onEdit={(row) => console.log("Edit", row)}
            onDelete={(id) => console.log("Delete", id)}
          />
        </div>
      )}
           
           {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white w-[50%] p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Schedule Interview</h2>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>   
                <div className="mb-4">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={handleScheduleInterview}
                  >
                    Schedule
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

           
             {showRequiredModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white w-[50%] p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Schedule Interview</h2>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>   
                <div className="mb-4">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={handleScheduleInterview}
                  >
                    Add Requirement
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setShowRequiredModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

    </div>
    </div>
  );
};

export default Application;
