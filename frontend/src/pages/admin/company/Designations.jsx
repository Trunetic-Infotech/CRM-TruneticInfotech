import React, { useState } from 'react'
import Table from "../../../components/Table";
import Card from "../../../components/Card";
import totalDepartmentIcon from "../../../assets/hierarchy-structure.png"
import activeDepartmentIcon from "../../../assets/department.png"
import employee1 from "../../../assets/employee1.png"
import AddButton from "../../../components/AddButton";

const Designations = () => {
     const [designstion, setDesignations] = useState([
  {
    id: 1,
    designation: "Software Engineer",
    description: "Develops and maintains software applications and systems",
    department: "Engineering",
    level: "Mid",
    salaryRange: "$70K - $95K",
    employees: 15,
    status: "Active",
  },
  {
    id: 2,
    designation: "Senior Software Engineer",
    description: "Leads technical projects and mentors junior developers",
    department: "Engineering",
    level: "Senior",
    salaryRange: "$95K - $130K",
    employees: 8,
    status: "Active",
  },
  {
    id: 3,
    designation: "HR Specialist",
    description: "Manages recruitment, employee relations, and HR policies",
    department: "Human Resources",
    level: "Mid",
    salaryRange: "$55K - $70K",
    employees: 4,
    status: "Active",
  },
  {
    id: 4,
    designation: "Marketing Manager",
    description: "Develops and executes marketing strategies and campaigns",
    department: "Marketing",
    level: "Manager",
    salaryRange: "$80K - $110K",
    employees: 3,
    status: "Active",
  },
  {
    id: 5,
    designation: "Financial Analyst",
    description: "Analyzes financial data and prepares reports for decision making",
    department: "Finance",
    level: "Mid",
    salaryRange: "$60K - $80K",
    employees: 5,
    status: "Active",
  },
  {
    id: 6,
    designation: "Sales Representative",
    description: "Generates leads, manages client relationships, and closes sales",
    department: "Sales",
    level: "Junior",
    salaryRange: "$45K - $65K",
    employees: 12,
    status: "Active",
  },
  {
    id: 7,
    designation: "DevOps Engineer",
    description: "Manages infrastructure, deployment pipelines, and system reliability",
    department: "Engineering",
    level: "Senior",
    salaryRange: "$90K - $125K",
    employees: 3,
    status: "Inactive",
  },
]);

    
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [editableRow, setEditableRow] = useState(null);

      const columns = [
  { name: "Designation", accessor: "designation" },
  { name: "Department", accessor: "department" },
  { name: "Level", accessor: "level" },
  { name: "Salary Range", accessor: "salaryRange" },
  { name: "Employees", accessor: "employees" },
  { name: "Status", accessor: "status" },
  { name: "Actions", accessor: "actions" },
];




  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between ">
        <div>
          {" "}
          <p className="font-bold text-3xl pl-7 md:pl-0">Designations</p>
          <p className="text-gray-600 pl-7 md:pl-0">
            Manage job titles, roles, and position hierarchies
          </p>
        </div>
        <div>
         

          <AddButton data="Add Designation" onclick={() => {
              // You could open a modal here to create a new department
              setEditableRow({ id: "", name: "", manager: "" }); // empty form
              setIsModalOpen(true);
            }}/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        <Card label="Total Designation" data="6" icon={totalDepartmentIcon} />
        <Card label="Active Positions" data="5" icon={activeDepartmentIcon} />
        <Card label="Total Employees" data="7" icon={employee1} />
      </div>
      <Table
        columns={columns}
        data={designstion}
        // onEdit={handleEdit}
        // onDelete={handleDelete}
      />

      {/* Edit Modal */}
      {isModalOpen && editableRow && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Department</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Department Name
                </label>
                <input
                  type="text"
                  name="name"
                //   value={editableRow.name}
                //   onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Manager
                </label>
                <input
                  type="text"
                  name="manager"
                //   value={editableRow.manager}
                //   onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                />
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                //   onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                //   onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Designations