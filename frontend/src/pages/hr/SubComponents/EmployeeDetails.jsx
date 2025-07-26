import React, { useState } from "react";
import Card from "../../../components/Card";
import Table from "../../../components/Table";
import EmployeeModal from "../SubComponents/EmployeeModel";
import { Search, Download, Upload, Plus } from "lucide-react";

// Summary Cards
const summary = [
  { label: "Total Employees", icon: "👥" },
  { label: "Today New Joining", icon: "👨‍💼" },
  { label: "Total Active Employees", icon: "🏢" },
  { label: "On Leave Employees", icon: "📽️" },
];

const initialEmployees = [
  {
    id: 1,
    name: "Sarah Johnson",
    department: "Engineering",
    position: "Frontend Developer",
    projects: 8,
    status: "active",
    manager: "David Kim",
    budget: "$95,000",
    extension: "E1001",
  },
  {
    id: 2,
    name: "Michael Chen",
    department: "Product",
    position: "Product Manager",
    projects: 12,
    status: "active",
    manager: "Lisa Thompson",
    budget: "$110,000",
    extension: "P2002",
  },
  {
    id: 3,
    name: "Lisa Thompson",
    department: "Engineering",
    position: "VP of Engineering",
    projects: 25,
    status: "on leave",
    manager: "-",
    budget: "$165,000",
    extension: "VP0001",
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

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("all");
  const [status, setStatus] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editable, setEditable] = useState(null);

  const allDepartments = ["all", ...new Set(employees.map((e) => e.department))];
  const allStatuses = ["all", "active", "on leave"];

  const filtered = employees.filter((emp) => {
    const matchName = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDept = department === "all" || emp.department === department;
    const matchStatus = status === "all" || emp.status === status;
    return matchName && matchDept && matchStatus;
  });

  const handleSave = (data) => {
    if (editable) {
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === editable.id ? data : emp))
      );
    } else {
      setEmployees((prev) => [...prev, { ...data, id: Date.now() }]);
    }
    setEditable(null);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    }
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Employee Management</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {summary.map((card, i) => (
          <Card
            key={i}
            label={card.label}
            data={
              card.label === "Total Employees"
                ? employees.length
                : card.label === "Total Active Employees"
                ? employees.filter((e) => e.status === "active").length
                : card.label === "On Leave Employees"
                ? employees.filter((e) => e.status === "on leave").length
                : 2
            }
            icon={card.icon}
          />
        ))}
           <p className='text-gray-600'>Manage Employee Details</p>
      </div>

      {/* Filters & Actions */}
      <div className="bg-white p-4 rounded-xl border flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              className="pl-10 pr-4 py-2 border rounded-lg"
              placeholder="Search employee..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            {allDepartments.map((dept, i) => (
              <option key={i} value={dept}>
                {dept === "all" ? "All Departments" : dept}
              </option>
            ))}
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            {allStatuses.map((s, i) => (
              <option key={i} value={s}>
                {s === "all" ? "All Statuses" : s}
              </option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button className="border px-4 py-2 rounded-lg flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="border px-4 py-2 rounded-lg flex items-center">
            <Upload className="w-4 h-4 mr-2" />
            Import
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
            onClick={() => {
              setEditable(null);
              setIsModalOpen(true);
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Employee
          </button>
        </div>
      </div>

      {/* Table */}
      <Table columns={columns} data={filtered} onEdit={setEditable} onDelete={handleDelete} />

      {/* Modal */}
      {isModalOpen && (
        <EmployeeModal
          onClose={() => {
            setEditable(null);
            setIsModalOpen(false);
          }}
          onSave={handleSave}
          initialData={editable}
        />
      )}
    </div>
  );
};

export default EmployeeDetails;
