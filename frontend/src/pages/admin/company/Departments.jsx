import React, { useState } from 'react'
import Table from '../../../components/Table'
import Card from "../../../components/Card"

const Departments = () => {
  const [departments, setDepartments] = useState([
  {
    id: 1,
    name: 'Software Development',
    manager: 'Alice Johnson',
    employeeCount: 42,
    activeProjects: 6,
    budget: 350000,
    email: 'dev@techcorp.com',
    extension: '101'
  },
  {
    id: 2,
    name: 'Quality Assurance',
    manager: 'Bob Smith',
    employeeCount: 18,
    activeProjects: 4,
    budget: 120000,
    email: 'qa@techcorp.com',
    extension: '102'
  },
  {
    id: 3,
    name: 'IT Support',
    manager: 'Charlie Davis',
    employeeCount: 15,
    activeProjects: 2,
    budget: 80000,
    email: 'itsupport@techcorp.com',
    extension: '103'
  },
  {
    id: 4,
    name: 'Human Resources',
    manager: 'Dana Miller',
    employeeCount: 10,
    activeProjects: 1,
    budget: 60000,
    email: 'hr@techcorp.com',
    extension: '104'
  },
  {
    id: 5,
    name: 'Product Management',
    manager: 'Evan Brown',
    employeeCount: 12,
    activeProjects: 3,
    budget: 150000,
    email: 'product@techcorp.com',
    extension: '105'
  },
  {
    id: 6,
    name: 'UI/UX Design',
    manager: 'Fiona Clark',
    employeeCount: 9,
    activeProjects: 5,
    budget: 95000,
    email: 'design@techcorp.com',
    extension: '106'
  },
])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableRow, setEditableRow] = useState(null);

  const handleEdit = (row) => {
    setEditableRow(row);
    setIsModalOpen(true);
  };

   const handleSave = () => {
    setDepartments((prev) =>
      prev.map((dept) => (dept.id === editableRow.id ? editableRow : dept))
    );
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableRow({ ...editableRow, [name]: value });
  };

const columns = [
  {name:"ID" ,accessor: "id"},
  {name:"Name" ,accessor: "name"},
  {name:"Manager" ,accessor: "manager"},
  {name:"Total Employees" ,accessor: "employeeCount"},
  {name:"Active Projects" ,accessor: "activeProjects"},
  {name:"Budget" ,accessor: "budget"},
  {name:"Extension" ,accessor: "extension"},
  {name: "Actions", accessor: "actions"}
]



  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this department?');
    if (confirmed) {
      setDepartments((prev) => prev.filter((dept) => dept.id !== id));
    }
  };

  return (
    <div className='flex flex-col gap-5'>
        <div>
          <p className='font-bold text-3xl '>Departments</p>
          <p className='text-gray-600'>Manage company departments and organizational structure</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
          <Card label="Total Departments" data="6"  />
          <Card label="Active Departments" data="5"  />
          <Card label="Total Employees" data="7"  />
        </div>
        <Table columns={columns} data={departments} onEdit={handleEdit} onDelete={handleDelete}/>

        {/* Edit Modal */}
      {isModalOpen && editableRow && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Department</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Department Name</label>
                <input
                  type="text"
                  name="name"
                  value={editableRow.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Manager</label>
                <input
                  type="text"
                  name="manager"
                  value={editableRow.manager}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                />
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
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

export default Departments