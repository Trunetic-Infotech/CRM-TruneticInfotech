import React from "react";
import { FiDownload } from "react-icons/fi";
import Card from "../../../components/Card";
import { Search } from "lucide-react";
import Virat from "../../../assets/virat.webp";
import Ash from "../../../assets/Ash.jpg";
import { Eye, Pencil } from "lucide-react";

const Salaries = () => {
  const cardData = [
    { label: "Total Employees", data: "5" },
    { label: "Active Salaries", data: "4" },
    { label: "Average Salaries", data: "₹ 32,000" },
  ];

  const salaryCardData = [
    {
      name: "Aarav Mehta",
      img: Virat,

      initials: "AM",
      title: "Frontend Developer",
      department: "Engineering",
      baseSalary: 85000,
      netSalary: 98950,
      allowances: {
        housing: 15000,
        transport: 5000,
        medical: 3000,
        bonus: 8500,
      },
      deductions: {
        tax: 12750,
        insurance: 2550,
        pension: 4250,
        loan: 5000,
      },
      status: "Active",
      lastUpdated: "2024-01-15",
    },
    {
      name: "Riya Sharma",
      img: Ash,

      initials: "RS",
      title: "UI/UX Designer",
      department: "Design",
      baseSalary: 75000,
      netSalary: 86750,
      allowances: {
        housing: 12000,
        transport: 4000,
        medical: 3000,
        bonus: 7500,
      },
      deductions: {
        tax: 11250,
        insurance: 2250,
        pension: 3750,
        loan: 0,
      },
      status: "Active",
      lastUpdated: "2024-01-10",
    },
    {
      name: "Kabir Joshi",
      img: Virat,

      initials: "KJ",
      title: "Backend Developer",
      department: "Engineering",
      baseSalary: 95000,
      netSalary: 110150,
      allowances: {
        housing: 18000,
        transport: 6000,
        medical: 4000,
        bonus: 9200,
      },
      deductions: {
        tax: 13500,
        insurance: 2700,
        pension: 5000,
        loan: 2550,
      },
      status: "Active",
      lastUpdated: "2024-01-20",
    },
    {
      name: "Ananya Desai",
      img: Ash,

      initials: "AD",
      title: "Digital Marketing Specialist",
      department: "Marketing",
      baseSalary: 65000,
      netSalary: 72550,
      allowances: {
        housing: 10000,
        transport: 2500,
        medical: 2000,
        bonus: 6500,
      },
      deductions: {
        tax: 9500,
        insurance: 2000,
        pension: 3000,
        loan: 950,
      },
      status: "Active",
      lastUpdated: "2024-01-08",
    },
    {
      name: "Neha Verma",
      img: Virat,

      initials: "NV",
      title: "QA Engineer",
      department: "Engineering",
      baseSalary: 70000,
      netSalary: 80500,
      allowances: {
        housing: 13000,
        transport: 3500,
        medical: 2500,
        bonus: 7000,
      },
      deductions: {
        tax: 10500,
        insurance: 2000,
        pension: 3200,
        loan: 1800,
      },
      status: "Active",
      lastUpdated: "2024-01-18",
    },
    {
      name: "Vikram Singh",
      img: Ash,

      initials: "VS",
      title: "Sales Manager",
      department: "Sales",
      baseSalary: 80000,
      netSalary: 91000,
      allowances: {
        housing: 14000,
        transport: 4000,
        medical: 3500,
        bonus: 8000,
      },
      deductions: {
        tax: 11500,
        insurance: 2100,
        pension: 3900,
        loan: 2000,
      },
      status: "Active",
      lastUpdated: "2024-01-12",
    },
    {
      name: "Isha Kapoor",
      img: Ash,

      initials: "IK",
      title: "HR Executive",
      department: "Human Resources",
      baseSalary: 60000,
      netSalary: 69200,
      allowances: {
        housing: 9000,
        transport: 2000,
        medical: 1500,
        bonus: 6000,
      },
      deductions: {
        tax: 8500,
        insurance: 1800,
        pension: 2400,
        loan: 1600,
      },
      status: "Active",
      lastUpdated: "2024-01-05",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">
            Salary Management
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">
            Manage employee salaries and compensation
          </p>
        </div>
        <div>
          <button className="bg-green-400 flex gap-3 p-2 sm:px-3 sm:py-2  items-center  rounded-md text-white">
            <FiDownload className="w-4 h-4 sm:w-6 sm:h-6 " />
            Export Report
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-5 place-items-center sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <Card
            key={index}
            label={card.label}
            data={card.data}
            className={`
        w-full 
        ${index === cardData.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
      `}
          />
        ))}
      </div>

      {/* Filter Sections */}

      <div className="bg-white shadow-md rounded-xl w-full grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 py-8 border border-gray-300">
        <div className="w-full relative">
          <Search className="text-gray-400 absolute top-2.5 left-3" />
          <input
            type="text"
            className="border-2 border-gray-300 w-full pl-10 px-3 py-2 rounded-xl"
            placeholder="Search Employees by name, company, email or Id"
          />
        </div>
        <div className="flex flex-row gap-4 sm:gap-5 justify-between w-full">
          <select
            name=""
            id=""
            className="border-2 border-gray-300 px-4 py-2 rounded-xl w-full sm:w-1/2"
          >
            <option value="">All Departments</option>
          </select>
          <select
            name=""
            id=""
            className="border-2 border-gray-300 px-4 py-2 rounded-xl w-full sm:w-1/2"
          >
            <option value="">All Status</option>
          </select>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {salaryCardData.map((emp, index) => (
    <div key={index} className="bg-white border border-gray-300 shadow-md rounded-md p-4 md:p-5 flex flex-col gap-4">
      {/* Top Section: Profile and Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
        <div className="flex items-center gap-3">
          <img
            src={emp.img}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
          />
          <div>
            <p className="text-lg md:text-xl font-bold">{emp.name}</p>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              {emp.title}
            </p>
            <p className="text-xs md:text-sm text-gray-400 font-medium">
              {emp.department}
            </p>
          </div>
        </div>

        <div className="flex gap-3 justify-end sm:items-start">
          <button title="View" className="text-blue-500 hover:text-blue-700">
            <Eye className="w-4 h-4" />
          </button>
          <button title="Edit" className="text-green-500 hover:text-green-700">
            <Pencil className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Salary Section */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-[#eff6ff] rounded-xl p-2">
          <p className="text-[#2665ed] text-sm md:text-base font-bold">Base Salary</p>
          <p className="text-[#1e3a8a] font-bold text-sm md:text-base">$85000</p>
        </div>
        <div className="bg-[#f0fcf4] rounded-xl p-2">
          <p className="text-[#39baa7] text-sm md:text-base font-bold">Net Salary</p>
          <p className="text-[#14532d] font-bold text-sm md:text-base">$98950</p>
        </div>
      </div>

      {/* Allowances Section */}
      <div className="space-y-2">
        <div>
          <p className="font-bold text-sm md:text-base">Allowances:</p>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(emp.allowances).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <p className="text-gray-500 capitalize font-normal">{key}:</p>
                <p className="font-medium">₹ {value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deductions Section */}
        <div>
          <p className="font-bold text-sm md:text-base">Deductions:</p>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(emp.deductions).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <p className="text-gray-500 capitalize font-normal">{key}:</p>
                <p className="font-medium text-red-500">₹ {value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200" />

      {/* Status and Updated Time */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <p className="text-sm bg-green-200 text-green-900 font-medium px-3 py-1 rounded-full">
          {emp.status}
        </p>
        <p className="text-sm text-gray-600">
          Updated: <span className="font-medium">{emp.lastUpdated}</span>
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Salaries;
