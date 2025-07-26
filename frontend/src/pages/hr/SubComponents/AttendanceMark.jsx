import { PauseCircle, PlayCircle, StopCircle, Upload } from 'lucide-react'
import React from 'react'
import Table from '../../../components/Table';

const AttendanceMark = () => {

const employeesData = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Senior Frontend Developer',
    department: 'Engineering',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'sarah.j@company.com',
    phone: '+1 (555) 123-4567',
    workSchedule: {
      startTime: '09:00',
      endTime: '17:00',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    currentStatus: 'checked-in',
    lastActivity: '2 minutes ago'
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'Product Manager',
    department: 'Product',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'michael.c@company.com',
    phone: '+1 (555) 234-5678',
    workSchedule: {
      startTime: '08:30',
      endTime: '16:30',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    currentStatus: 'on-break',
    lastActivity: '15 minutes ago'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Senior UX Designer',
    department: 'Design',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'emily.r@company.com',
    phone: '+1 (555) 345-6789',
    workSchedule: {
      startTime: '09:30',
      endTime: '17:30',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    currentStatus: 'checked-out',
    lastActivity: '1 hour ago'
  },
  {
    id: '4',
    name: 'David Kim',
    position: 'Engineering Manager',
    department: 'Engineering',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'david.k@company.com',
    phone: '+1 (555) 456-7890',
    workSchedule: {
      startTime: '08:00',
      endTime: '16:00',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    currentStatus: 'checked-in',
    lastActivity: '5 minutes ago'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    position: 'VP of Engineering',
    department: 'Engineering',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'lisa.t@company.com',
    phone: '+1 (555) 567-8901',
    workSchedule: {
      startTime: '09:00',
      endTime: '17:00',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    currentStatus: 'offline',
    lastActivity: '2 days ago'
  }
];

  const columnsDATA = [
    { name: 'Name', accessorKey: 'name' },
    { name: 'Position', accessorKey: 'position' },
    { name: 'Department', accessorKey: 'department' },
    { name: 'Email', accessorKey: 'email' },
    { name: 'Phone', accessorKey: 'phone' },
    {
      name: 'Work Schedule',
      accessorKey: 'workSchedule',
      cell: (info) => {
        const schedule = info.getValue();
        return `${schedule.startTime} - ${schedule.endTime}`;
      }
    },
    { name: 'Current Status', accessorKey: 'currentStatus' },
    { name: 'Last Activity', accessorKey: 'lastActivity' }
  ];
  
  return (
    <div className="p-6  gap-6">
       <h1 className="text-3xl font-bold">Employee Attendance</h1>
      <p className="text-gray-600">Manage Employee Attendances and Markin</p>
     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Attendance Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center justify-center space-x-2 p-4 border-2 border-green-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all group">
            <PlayCircle className="h-6 w-6 text-green-600 group-hover:text-green-700" />
            <span className="font-medium text-green-700 group-hover:text-green-800">Check In All</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border-2 border-red-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all group">
            <StopCircle className="h-6 w-6 text-red-600 group-hover:text-red-700" />
            <span className="font-medium text-red-700 group-hover:text-red-800">Check Out All</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border-2 border-orange-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all group">
            <PauseCircle className="h-6 w-6 text-orange-600 group-hover:text-orange-700" />
            <span className="font-medium text-orange-700 group-hover:text-orange-800">Mark Break</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border-2 border-blue-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group">
            <Upload className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
            <span className="font-medium text-blue-700 group-hover:text-blue-800">Bulk Import</span>
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Attendance Records</h3>
        {/* Attendance records table or list goes here */}
       <Table
        columns={columnsDATA}
        data={employeesData}
        // onEdit={(row) => console.log("Edit", row)}
        // onDelete={(id) => console.log("Delete", id)}
      />
      </div>
    </div>
  )
}

export default AttendanceMark
