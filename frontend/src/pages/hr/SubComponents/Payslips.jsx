import React from 'react'
import Table from '../../../components/Table'


const leaveColumns = [
  { name: 'Employee ID', accessor: 'employeeId' },
  { name: 'Name', accessor: 'name' },
  { name: 'Total Number of Leaves', accessor: 'leaveType' },
  { name: 'Salary Date', accessor: 'startDate' },
  { name: 'End Date', accessor: 'endDate' },
  { name: 'Status', accessor: 'status' },
]

const leaveData = [
  {
    employeeId: '1',
    name: 'John Doe',
    leaveType: 'Sick Leave',
    startDate: '2025-07-10',
    endDate: '2025-07-12',
    status: 'Approved',
  },
  {
    employeeId: '2',
    name: 'Jane Smith',
    leaveType: 'Casual Leave',
    startDate: '2025-07-15',
    endDate: '2025-07-16',
    status: 'Pending',
  },
  {
    employeeId: '3',
    name: 'Alice Johnson',
    leaveType: 'Annual Leave',
    startDate: '2025-08-01',
    endDate: '2025-08-10',
    status: 'Approved',
  },
  {
    employeeId: '4',
    name: 'Bob Brown',
    leaveType: 'Maternity Leave',
    startDate: '2025-07-20',
    endDate: '2025-08-30',
    status: 'Rejected',
  },
  {
    employeeId: '5',
    name: 'Charlie White',
    leaveType: 'Compensatory Leave',
    startDate: '2025-07-18',
    endDate: '2025-07-19',
    status: 'Approved',
  },
];

const Payslips = () => {
  return (
   <div className="p-6  gap-6">
            <h1 className="text-3xl font-bold">Employee PaySlips</h1>
      <p className="text-gray-600">Manage and track employee payslips.</p>
      <Table  columns={leaveColumns} data={leaveData}/>
      
    </div>
  )
}

export default Payslips






 
