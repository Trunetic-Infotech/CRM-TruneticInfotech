import React from "react";
import exportIcon from "../../../assets/export.png";
import importIcon from "../../../assets/import.png";
import { FiUpload, FiDownload } from "react-icons/fi";
import Card from "../../../components/Card";
import Employee1 from "../../../assets/employee1.png";
import Employee from "../../../assets/employee.png";
import Leave from "../../../assets/leave.png";
import Virat from "../../../assets/virat.webp";
import Ash from "../../../assets/Ash.jpg";
import { FiFilter } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import Table from "../../../components/Table";
import { MdEmail, MdPhone } from "react-icons/md";

const AllEmployees = () => {
  const cardData = [
    { label: "Total Emplyees", data: "5", icon: Employee1 },
    { label: "Total Emplyees", data: "5", icon: Employee },
    { label: "On Leave", data: "5", icon: Leave },
  ];

  const employees = [
  {
    id: 1,
    name: "Aarav Mehta",
    img: Virat,
    department: "Engineering",
    role: "Frontend Developer",
    email: "aarav.mehta@yourcompany.com",
    phone: "+91 9876543210",
    joiningDate: "2023-02-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Riya Sharma",
    img: Virat,
    department: "Design",
    role: "UI/UX Designer",
    email: "riya.sharma@yourcompany.com",
    phone: "+91 9988776655",
    joiningDate: "2022-11-03",
    status: "Active",
  },
  {
    id: 3,
    name: "Kabir Joshi",
    img: Ash,
    department: "Engineering",
    role: "Backend Developer",
    email: "kabir.joshi@yourcompany.com",
    phone: "+91 9123456789",
    joiningDate: "2021-08-21",
    status: "On Leave",
  },
  {
    id: 4,
    name: "Ananya Desai",
    img: Ash,
    department: "Marketing",
    role: "Digital Marketing Specialist",
    email: "ananya.desai@yourcompany.com",
    phone: "+91 9345678123",
    joiningDate: "2020-06-12",
    status: "Active",
  },
  {
    id: 5,
    name: "Rohit Nair",
    img: Ash,
    department: "Human Resources",
    role: "HR Manager",
    email: "rohit.nair@yourcompany.com",
    phone: "+91 9871234567",
    joiningDate: "2019-01-05",
    status: "Resigned",
  },
  
];


const columns = [
  {
    name: 'Name',
    accessor: 'name',
    render: (value, row) => (
      <div className='flex items-center gap-2'>
        <img src={row.img} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
        <p>{value}</p>
      </div>
    )
  },
  {
    name: 'Contact',
    accessor: 'contact',
    render: (_, row) => (
      <div className='flex flex-col justify-center gap-2'>
        <p className='flex items-center gap-2 text-black'><MdEmail /> {row.email}</p>
        <p className='text-gray-600 flex items-center gap-2'><MdPhone /> {row.phone}</p>
      </div>
    )
  },
  {
    name: 'Department',
    accessor: 'department',
    render: (_, row) => (
      <div className='flex flex-col gap-1'>
        <p className='font-bold'>{row.department}</p>
        <p className='text-sm text-gray-400'>{row.role}</p>
      </div>
    )
  },
  { name: "Joining Date", accessor: "joiningDate" },

  {
    name: 'Status',
    accessor: 'status',
    render: (value) => (
      <div className={`flex flex-col gap-2 ${value === "Absent" || value === "Resigned" ? "bg-red-200" : value === "On Leave" ? "bg-yellow-200 " : "bg-green-200"} rounded-xl text-center p-1`}>
        <p className={`font-bold ${value === "Absent" || value === "Resigned" ? "text-red-900" : value === "On Leave" ? "text-yellow-900" : "text-green-900"}`}>{value}</p>
      </div>
    )
  },
  {
    name: 'Actions',
    accessor: 'actions'
  }
];


  return (
    <div className="flex flex-col gap-5">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">All Employees</p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">
            Manage and view all employee information
          </p>
        </div>
        <div className="flex   gap-2 sm:gap-5 text-sm ">
          <button className="bg-green-400 flex gap-3 p-2 sm:px-3 sm:py-2  items-center  rounded-md text-white">
            <FiDownload className="w-4 h-4 sm:w-6 sm:h-6 " />
            Export
          </button>
          <button className="bg-blue-400 flex gap-3 p-2 sm:px-3 sm:py-2 items-center rounded-md text-white">
            <FiUpload className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            Import
          </button>
        </div>
      </div>

    {/* Cards Section */}
      <div className="flex justify-between flex-col lg:flex-row gap-5 items-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            label={card.label}
            data={card.data}
            icon={card.icon}
          />
        ))}
      </div>


        {/* Filter Section */}
      <div className="flex md:flex-row flex-col justify-between w-full bg-white p-6 rounded-lg border-2 gap-2 border-gray-300">
       <div className="w-full relative">
  <input
    type="text"
    className="w-full border-2 border-gray-300 rounded-md py-2 pl-10 pr-4 text-sm md:text-base placeholder:text-sm md:placeholder:text-base"
    placeholder="Search employees by name, email or ID..."
  />
  <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {/* Filter with icon */}
  <div className="flex gap-3 items-center w-full">
    <FiFilter size={20} className="text-gray-400 w-6 h-6" />
    <select className="w-full border-2 border-gray-300 px-4 py-2 rounded-md text-sm md:text-base">
      <option value="">All Departments</option>
      <option value="">Design</option>
      <option value="">Engineering</option>
    </select>
  </div>

  {/* Type Filter */}
  <div>
    <select className="w-full border-2 border-gray-300 px-4 py-2 rounded-md text-sm md:text-base">
      <option value="">All Types</option>
      <option value="">Full-time</option>
      <option value="">Contract</option>
    </select>
  </div>

  {/* Status Filter */}
  <div>
    <select className="w-full border-2 border-gray-300 px-4 py-2 rounded-md text-sm md:text-base">
      <option value="">All Status</option>
      <option value="">Active</option>
      <option value="">On Leave</option>
    </select>
  </div>
</div>

      </div>

        {/* List Section */}
      <div>
        <Table columns={columns} data={employees} profile={true}/>
      </div>
    </div>
  );
};

export default AllEmployees;
