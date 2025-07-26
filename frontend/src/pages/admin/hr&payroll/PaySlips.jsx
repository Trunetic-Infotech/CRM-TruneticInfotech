import React from "react";
import { FiDownload, FiUpload } from "react-icons/fi";
import { data } from "react-router-dom";
import Card from "../../../components/Card";
import { Download, Eye, Pencil, Search } from "lucide-react";
import Virat from "../../../assets/virat.webp";
import Ash from "../../../assets/Ash.jpg";

const PaySlips = () => {
  const cardData = [
    { label: "Total PaySlips", data: "3" },
    { label: "Sent", data: "1" },
    { label: "Downloaded", data: "1" },
    { label: "Total Net Pay", data: "3,20,350" },
  ];

  const payrollSummary = [
    {
      month: "January 2024",
      status: "Completed",
      employees: 5,
      grossPay: 525000,
      deductions: 78750,
      netPay: 446250,
    },
    {
      month: "December 2023",
      status: "Approved",
      employees: 5,
      grossPay: 520000,
      deductions: 78000,
      netPay: 442000,
    },
    {
      month: "February 2024",
      status: "Processing",
      employees: 5,
      grossPay: 530000,
      deductions: 79500,
      netPay: 450500,
    },
  ];

  const employeePayrollData = [
    {
      name: "Aarav Mehta",
      img: Ash,
      initials: "AM",
      designation: "Frontend Developer",
      department: "Engineering",
      payPeriod: "January 2024",
      payDate: "1/31/2024",
      totalEarnings: 129000,
      totalDeductions: 24550,
      netPay: 104450,
      earnings: {
        basic: 85000,
        allowances: 33500,
        overtime: 2000,
      },
      deductions: {
        tax: 12750,
        insurance: 2550,
        pension: 4250,
      },
      status: "Generated",
      workingDays: 22,
    },
    {
      name: "Riya Sharma",
      img: Virat,
      initials: "RS",
      designation: "UI/UX Designer",
      department: "Design",
      payPeriod: "January 2024",
      payDate: "1/31/2024",
      totalEarnings: 111000,
      totalDeductions: 17250,
      netPay: 93750,
      earnings: {
        basic: 75000,
        allowances: 27000,
        overtime: 1500,
      },
      deductions: {
        tax: 11250,
        insurance: 2250,
        pension: 3750,
      },
      status: "Downloaded",
      workingDays: 22,
    },
    {
      name: "Karan Patel",
      img: Ash,

      initials: "KP",
      designation: "Backend Developer",
      department: "Engineering",
      payPeriod: "January 2024",
      payDate: "1/31/2024",
      totalEarnings: 135000,
      totalDeductions: 26500,
      netPay: 108500,
      earnings: {
        basic: 90000,
        allowances: 40000,
        overtime: 5000,
      },
      deductions: {
        tax: 15000,
        insurance: 5000,
        pension: 6500,
      },
      status: "Generated",
      workingDays: 22,
    },
    {
      name: "Sneha Iyer",
      img: Virat,

      initials: "SI",
      designation: "QA Engineer",
      department: "Quality Assurance",
      payPeriod: "January 2024",
      payDate: "1/31/2024",
      totalEarnings: 98000,
      totalDeductions: 14000,
      netPay: 84000,
      earnings: {
        basic: 60000,
        allowances: 35000,
        overtime: 3000,
      },
      deductions: {
        tax: 8000,
        insurance: 3000,
        pension: 3000,
      },
      status: "Pending",
      workingDays: 22,
    },
    {
      name: "Neha Gupta",
      img: Ash,

      initials: "NG",
      designation: "HR Manager",
      department: "Human Resources",
      payPeriod: "January 2024",
      payDate: "1/31/2024",
      totalEarnings: 120000,
      totalDeductions: 20000,
      netPay: 100000,
      earnings: {
        basic: 85000,
        allowances: 32000,
        overtime: 3000,
      },
      deductions: {
        tax: 12000,
        insurance: 4000,
        pension: 4000,
      },
      status: "Downloaded",
      workingDays: 22,
    },
    {
      name: "Vikram Joshi",
      img: Virat,

      initials: "VJ",
      designation: "Product Manager",
      department: "Product",
      payPeriod: "January 2024",
      payDate: "1/31/2024",
      totalEarnings: 150000,
      totalDeductions: 35000,
      netPay: 115000,
      earnings: {
        basic: 100000,
        allowances: 45000,
        overtime: 5000,
      },
      deductions: {
        tax: 20000,
        insurance: 8000,
        pension: 7000,
      },
      status: "Generated",
      workingDays: 22,
    },
    {
      name: "Priya Deshmukh",
      img: Ash,

      initials: "PD",
      designation: "Business Analyst",
      department: "Business",
      payPeriod: "January 2024",
      payDate: "1/31/2024",
      totalEarnings: 102000,
      totalDeductions: 18500,
      netPay: 83500,
      earnings: {
        basic: 70000,
        allowances: 30000,
        overtime: 2000,
      },
      deductions: {
        tax: 10000,
        insurance: 4000,
        pension: 4500,
      },
      status: "Generated",
      workingDays: 22,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">
            Payslips Management
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">
            Generate and manage employee payslips
          </p>
        </div>
        <div className="flex   gap-2 sm:gap-5 text-sm ">
          <button className="bg-blue-400 flex gap-3 p-2 sm:px-3 sm:py-2 items-center rounded-md text-white">
            <FiUpload className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            Generate PaySlip
          </button>   
          <button className="bg-green-400 flex gap-3 p-2 sm:px-3 sm:py-2  items-center  rounded-md text-white">
            <FiDownload className="w-4 h-4 sm:w-6 sm:h-6 " />
              Export All
          </button>
          
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        {cardData.map((card, index) => (
          <Card label={card.label} data={card.data} />
        ))}
      </div>

      {/* Summary Section */}
      <div className="bg-white border border-gray-300 rounded-md shadow-md p-5 space-y-5 ">
        <div>
          <p className="font-bold text-2xl ">Payroll Summary</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
          {payrollSummary.map((pay, index) => (
            <div className="border border-gray-300 p-5 rounded-md shadow-md flex flex-col gap-3">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold ">{pay.month}</p>
                  <p className="text-gray-400 text-sm">
                    {pay.employees} Employees
                  </p>
                </div>
                <div>
                  <p className="bg-green-200 px-3 text-sm text-green-900 rounded-md py-1">
                    {pay.status}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <p className="text-gray-400 text-md font-medium">
                    Gross Pay:
                  </p>
                  <p className="font-bold">₹ {pay.grossPay}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-400 text-md font-medium">
                    Deductions:
                  </p>
                  <p className="text-red-400 text-md font-bold">
                    - ₹ {pay.deductions}
                  </p>
                </div>
              </div>

              <hr className="border border-gray-300" />

              <div className="flex justify-between">
                <p className="font-bold">Net Pay:</p>
                <p className="font-bold text-green-600 ">₹ {pay.netPay}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Section */}
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

      {/* Employee Payroll Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 y">
        {employeePayrollData.map((emp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 shadow-md rounded-xl p-4 md:p-5 flex flex-col gap-4"
          >
            {/* Top Section: Profile and Buttons */}
            <div className="flex flex-row justify-between gap-4 sm:gap-0">
              <div className="flex items-center gap-3">
                <img
                  src={emp.img}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
                />
                <div>
                  <p className="text-lg md:text-xl font-bold">{emp.name}</p>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    {emp.designation}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 font-medium">
                    {emp.department}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-end  items-start">
                <button
                  title="View"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  title="Edit"
                  className="text-green-500 hover:text-green-700"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-[#f7f9fa] p-4 space-y-2 rounded-md">
                <div className="flex justify-between ">
                  <p className="font-medium text-sm text-gray-700">Pay Period</p>
                  <p className="font-medium text-sm">{emp.payPeriod}</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-medium text-sm text-gray-700">Pay Date</p>
                  <p className="font-medium text-sm">{emp.payDate}</p>
                </div>
            </div>

            {/* Earnings Section */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#f0fcf4] rounded-xl p-2">
                <p className="text-[#39baa7] text-sm md:text-base font-bold">
                  Total Earnings
                </p>
                <p className="text-[#14532d] font-bold text-sm md:text-base">
                  $85000
                </p>
              </div>
              <div className="bg-[#fff2f2] rounded-xl p-2">
                <p className="text-[#de2626] text-sm md:text-base font-bold">
                  Total Deductions
                </p>
                <p className="text-[#801d1d] font-bold text-sm md:text-base">
                  $98950
                </p>
              </div>
              <div className="bg-[#f0f6ff] rounded-xl p-4 col-span-2 flex justify-between">
                <p className="text-[#326da8] text-sm md:text-lg font-bold">
                  Net Pay
                </p>
                <p className="text-[#1e3b8a] font-bold text-sm md:text-lg">
                  $98950
                </p>
              </div>
            </div>

            {/* Breakdown Section */}
            <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">Earnings Breakdown</p>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <p className=" font-normal text-gray-500">Basic:</p>
                      <p className="font-medium">{emp.earnings.basic}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className=" font-normal text-gray-500">Allowances:</p>
                      <p className="font-medium">{emp.earnings.allowances}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className=" font-normal text-gray-500">Overtime:</p>
                      <p className="font-medium">{emp.earnings.overtime}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div >
                    <p className="font-medium">Deductions Breakdown</p>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <p className=" font-normal text-gray-500">Tax:</p>
                      <p className="font-medium text-red-600">{emp.deductions.tax}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className=" font-normal text-gray-500">Insurance:</p>
                      <p className="font-medium text-red-600">{emp.deductions.insurance}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className=" font-normal text-gray-500">Pension:</p>
                      <p className="font-medium text-red-600">{emp.deductions.pension}</p>
                    </div>
                  </div>
                </div>
            </div>


            
            <hr className=""/>

            <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm bg-blue-600 text-white px-2 rounded-xl py-1">{emp.status}</p>
                </div>
                <div>
                  <p className="text-sm">Working Days: {emp.workingDays}</p>
                </div>
            </div>










          </div>
        ))}
      </div>
    </div>
  );
};

export default PaySlips;
