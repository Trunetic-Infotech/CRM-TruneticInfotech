import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'
import Table from '../../../components/Table';

const departments = ['Engineering', 'Product', 'Design', 'Marketing', 'Sales'];
const selectedType  = ['Joining Docs', 'ID Proof'];
const columnsDATA = [
  { name: 'Employee ID', accessor: 'id' },
  { name: 'Name', accessor: 'name' },
  { name: 'Department', accessor: 'department' },
  { name: 'Status', accessor: 'status' },
  { name: 'Date', accessor: 'date' },
];
const employeesData = [
  {
    id: '1',
    name: 'John Doe',
    department: 'Engineering',
    status: 'Present',
    date: '2023-01-01',
  },
  {
    id: '2',
    name: 'Jane Smith',
    department: 'Design',
    status: 'Absent',
    date: '2023-01-02',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    department: 'Sales',
    status: 'Present',
    date: '2023-01-03',
  },
]

const AttendanceRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  return (
    <div className="p-6  gap-6">
       <h1 className="text-3xl font-bold">Employee Attendance Record</h1>
      <p className="text-gray-600">View and manage Attendance Records</p>
      <div className=" mt-4">
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
      </div>
       <Table
        columns={columnsDATA}
        data={employeesData}
        // onEdit={(row) => console.log("Edit", row)}
        // onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  )
}

export default AttendanceRecords
