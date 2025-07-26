import { CheckIcon, EyeIcon, Search, Upload, XIcon } from "lucide-react";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Card from "../../../components/Card";
import { Label } from "recharts";
import Table from "../../../components/Table";
import Virat from "../../../assets/virat.webp";
import Ash from "../../../assets/Ash.jpg";

const LeaveRequests = () => {
  const cardData = [
    { label: "Total Requests", data: "5" },
    { label: "Pending", data: "1" },
    { label: "Approved", data: "3" },
    { label: "Rejected", data: "1" },
  ];

  const leaveRequests = [
    {
      id: 1,
      initials: "AM",
      name: "Aarav Mehta",
      img: Virat,
      appliedDate: "2024-01-20",
      leaveType: "Annual",
      fromDate: "2024-02-15",
      toDate: "2024-02-20",
      totalDays: 6,
      reason: "Family vacation to Goa",
      status: "Approved",
    },
    {
      id: 2,
      initials: "RS",
      name: "Riya Sharma",
      img: Virat,
      appliedDate: "2024-01-24",
      leaveType: "Sick",
      fromDate: "2024-01-25",
      toDate: "2024-01-26",
      totalDays: 2,
      reason: "Fever and flu symptoms",
      status: "Approved",
    },
    {
      id: 3,
      initials: "KJ",

      name: "Kabir Joshi",
      img: Ash,

      appliedDate: "2024-02-05",
      leaveType: "Personal",
      fromDate: "2024-02-10",
      toDate: "2024-02-12",
      totalDays: 3,
      reason: "Personal work - house shifting",
      status: "Pending",
    },
    {
      id: 4,
      initials: "AD",
      name: "Ananya Desai",
      img: Ash,

      appliedDate: "2024-01-15",
      leaveType: "Maternity",
      fromDate: "2024-03-01",
      toDate: "2024-05-30",
      totalDays: 90,
      reason: "Maternity leave for childbirth",
      status: "Approved",
    },
  ];

  const columns = [
  {
    name: "Employee",
    accessor: "name",
    render: (value, row) => (
      <div className="flex items-center gap-3">
        <img
          src={row.img}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm"
        />
        <div className="leading-tight">
          <p className="text-sm sm:text-base font-semibold text-gray-900">{value}</p>
          <p className="text-[11px] sm:text-xs text-gray-600">
            Applied on:{" "}
            {new Date(row.appliedDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Leave Type",
    accessor: "leaveType",
    render: (value) => {
      const badgeColors = {
        Annual: "bg-blue-100 text-blue-700",
        Sick: "bg-rose-100 text-rose-700",
        Personal: "bg-purple-100 text-purple-700",
        Maternity: "bg-pink-100 text-pink-700",
        Emergency: "bg-yellow-100 text-yellow-800",
      };
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeColors[value] || "bg-gray-100 text-gray-800"}`}>
          {value}
        </span>
      );
    },
  },
  {
    name: "Dates",
    accessor: "fromDate",
    render: (value, row) => (
      <div className="text-sm text-gray-800 leading-snug">
        <p>{new Date(row.fromDate).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}</p>
        <p className="text-xs text-gray-500">to {new Date(row.toDate).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}</p>
      </div>
    ),
  },
  {
    name: "Days",
    accessor: "totalDays",
    render: (value) => (
      <p className="font-semibold text-center text-sm text-gray-900">{value}</p>
    ),
  },
  {
    name: "Reason",
    accessor: "reason",
    render: (value) => (
      <p className="text-sm text-gray-700">{value}</p>
    ),
  },
  {
    name: "Status",
    accessor: "status",
    render: (value) => {
      const statusStyles = {
        Approved: "bg-green-100 text-green-600",
        Pending: "bg-yellow-100 text-yellow-700",
        Rejected: "bg-red-100 text-red-600",
      };
      return (
        <span className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[value] || "bg-gray-100 text-gray-700"}`}>
          {value}
        </span>
      );
    },
  },
 {
  name: "Actions",
  accessor: "actions1",
  render: (_, row) => {
    if (row.status === "Pending") {
      return (
        <div className="flex items-center gap-3 justify-center">
         
          <button title="Approve">
            <CheckIcon className="w-5 h-5 text-green-600" />
          </button>
          <button title="Reject">
            <XIcon className="w-5 h-5 text-red-600" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center">
          <span className="text-gray-400 text-xs">—</span>
        </div>
      );
    }
  }
}

];


  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">
            Leave Requests
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">
            Manage and track employee leave requests
          </p>
        </div>
        <div>
          <button className="bg-green-400 flex gap-3 p-2 sm:px-3 sm:py-2  items-center  rounded-md text-white">
            <FiDownload className="w-4 h-4 sm:w-6 sm:h-6 " />
            Export
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        {cardData.map((card, index) => (
          <Card key={index} label={card.label} data={card.data} />
        ))}
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-md rounded-xl w-full grid grid-cols-2 gap-5 px-4 py-8 border border-gray-300">
        <div className="w-full relative">
          <Search className="text-gray-400 absolute top-2.5 left-3" />
          <input
            type="text"
            className="border-2 border-gray-300 w-full pl-10 px-3 py-2 rounded-xl"
            placeholder="Search Employees by name, company, email or Id"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between w-full">
          <select
            name=""
            id=""
            className="border-2 border-gray-300 px-4 py-2 rounded-xl w-full sm:w-1/2"
          >
            <option value="">All Status</option>
          </select>
          <select
            name=""
            id=""
            className="border-2 border-gray-300 px-4 py-2 rounded-xl w-full sm:w-1/2"
          >
            <option value="">All Types</option>
          </select>
        </div>
      </div>

      {/* Table Section */}

      <div>
        <Table data={leaveRequests} columns={columns} />
      </div>
    </div>
  );
};

export default LeaveRequests;
