import React from "react";
import { Download } from "lucide-react";
import Present from "../../../assets/present.png";
import Absent from "../../../assets/absent.png";
import Late from "../../../assets/late.png";
import Employee1 from "../../../assets/employee1.png";
import Card from "../../../components/Card";
import Virat from "../../../assets/virat.webp";
import Ash from "../../../assets/Ash.jpg";
import Table from "../../../components/Table";

const Attendance = () => {
  const cardData = [
    { label: "Present Today", data: "2", icon: Present },
    { label: "Absent Today", data: "3", icon: Absent },
    { label: "Late Arrivals", data: "0", icon: Late },
    { label: "Total Employees", data: "5", icon: Employee1 },
  ];

  const employees = [
    {
      id: 1,
      name: "Aarav Mehta",
      img: Virat,
      department: "Engineering",
      role: "Frontend Developer",
      checkIn: "09:00",
      checkOut: "18:00",
      hoursWorked: "9h",
      status: "Present",
    },
    {
      id: 2,
      name: "Riya Sharma",
      img: Virat,
      department: "Design",
      role: "UI/UX Designer",
      checkIn: "-",
      checkOut: "-",
      hoursWorked: "-",
      status: "Absent",
    },
    {
      id: 3,
      name: "Kabir Joshi",
      img: Ash,
      department: "Engineering",
      role: "Backend Developer",
      checkIn: "-",
      checkOut: "-",
      hoursWorked: "-",
      status: "Absent",
    },
    {
      id: 4,
      name: "Ananya Desai",
      img: Ash,
      department: "Marketing",
      role: "Digital Marketing Specialist",
      checkIn: "09:05",
      checkOut: "18:03",
      hoursWorked: "9h",
      status: "Present",
    },
    {
      id: 5,
      name: "Rohit Nair",
      img: Ash,
      department: "Human Resources",
      role: "HR Manager",
      checkIn: "09:00",
      checkOut: "18:00",
      hoursWorked: "9h",
      status: "Present",
    },
  ];

  const columns = [
    { name: "Employee", accessor: "name", render: (value, row) => 
       <div className='flex items-center gap-2'>
        <img src={row.img} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
        <div >
          <p className="text-lg font-bold">{value}</p>
        <p className="text-xs text-start text-gray-800">{row.role}</p>
        </div>
      </div>
     },
    { name: "Department", accessor: "department" },
    { name: "Check In", accessor: "checkIn" },
    { name: "Check Out", accessor: "checkOut" },
    { name: "Hours Worked", accessor: "hoursWorked" },
    {
      name: "Status",
      accessor: "status",
      render: (value, row) => (
        <div
          className={`flex flex-col gap-2 ${
            row["status"] === "Absent" ? "bg-red-200" : "bg-green-200"
          } rounded-xl text-center p-1`}
        >
          <p
            className={`font-bold ${
              row["status"] === "Absent" ? "text-red-900" : "text-green-900"
            }`}
          >
            {row["status"]}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">
            Attendance Management
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">
            Track and manage employee attendance records
          </p>
        </div>
        <div>
          <button className="flex gap-3 items-center px-5 py-2 bg-green-600 rounded-xl text-white">
            <Download className="w-5 h-5 " />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-3">
        {cardData.map((card, index) => (
          <Card
            key={index}
            label={card.label}
            data={card.data}
            icon={card.icon}
          />
        ))}
      </div>

      <div className="bg-white rounded-xl w-full grid grid-cols-1 sm:grid-cols-2 px-4 py-6 gap-5 shadow-md">
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-gray-500 font-medium">
            Select Date
          </label>
          <input
            type="date"
            name=""
            id=""
            className="border border-gray-500 p-2 rounded-xl w-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-gray-500 font-medium">
            Filter by Employee
          </label>
          <select
            name=""
            id=""
            className="border border-gray-500 p-2 rounded-xl"
          >
            <option value="">All Employees</option>
          </select>
        </div>
      </div>

      <div>
        <Table columns={columns} data={employees} />
      </div>
    </div>
  );
};

export default Attendance;
