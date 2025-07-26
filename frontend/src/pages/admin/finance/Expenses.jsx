import { Plus, Search } from "lucide-react";
import React from "react";
import { FiDownload, FiUpload } from "react-icons/fi";
import Card from "../../../components/Card";
import Table from "../../../components/Table";
import { BsEye } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiOutlineReceiptRefund } from "react-icons/hi";


const Expenses = () => {
  const cardData = [
    { label: "Total Expenses", data: "10,750" },
    { label: "Pending", data: "1" },
    { label: "Approved", data: "1" },
    { label: "Paid", data: "2" },
  ];

  const expenseCategories = [
    {
      name: "Office & Facilities",
      color: "#3B82F6", // blue
      budget: 8000,
      spent: 5000,
    },
    {
      name: "Software & Tools",
      color: "#10B981", // green
      budget: 5000,
      spent: 3500,
    },
    {
      name: "Marketing",
      color: "#F59E0B", // yellow/orange
      budget: 3000,
      spent: 2000,
    },
    {
      name: "Travel & Transportation",
      color: "#A855F7", // purple
      budget: 2000,
      spent: 800,
    },
    {
      name: "Meals & Entertainment",
      color: "#EF4444", // red
      budget: 1000,
      spent: 250,
    },
    {
      name: "Employee Training",
      color: "#6366F1", // indigo
      budget: 1500,
      spent: 1200,
    },
    {
      name: "Client Gifts",
      color: "#EC4899", // pink
      budget: 2000,
      spent: 750,
    },
    {
      name: "IT Infrastructure",
      color: "#0EA5E9", // sky blue
      budget: 6000,
      spent: 4600,
    },
    {
      name: "Legal & Compliance",
      color: "#8B5CF6", // violet
      budget: 2500,
      spent: 1800,
    },
  ];

  const expenses = [
  {
    title: "Office Rent - January 2024",
    description: "Monthly office rent payment",
    category: "Office & Facilities",
    amount: 5000,
    paymentMethod: "Bank Transfer",
    date: "2024-01-01",
    vendor: "Property Management Co.",
    status: "Paid",
  },
  {
    title: "Software Licenses",
    description: "Annual software licenses for development tools",
    category: "Software & Tools",
    amount: 3500,
    paymentMethod: "Credit Card",
    date: "2024-01-15",
    vendor: "Various Software Vendors",
    status: "Paid",
  },
  {
    title: "Team Lunch - Client Meeting",
    description: "Business lunch with TechCorp Solutions team",
    category: "Meals & Entertainment",
    amount: 250,
    paymentMethod: "Credit Card",
    date: "2024-01-18",
    vendor: "Restaurant ABC",
    status: "Approved",
  },
  {
    title: "Marketing Campaign",
    description: "Digital marketing campaign for Q1",
    category: "Marketing",
    amount: 2000,
    paymentMethod: "Bank Transfer",
    date: "2024-01-22",
    vendor: "Digital Marketing Agency",
    status: "Pending",
  }
];


  const columns = [
    {name : "Expense",
      accessor: "title",
      render: (value, row)=> (
        <div>
          <p className="font-bold">{value}</p>
          <p className="text-gray-500">{row.description}</p>
        </div>
      )
    },
    {name: "Category",
      accessor: "category",
      render: (value,row)=> (
        <div className="bg-gray-200 py-2 rounded-xl text-center">
          <p>{value}</p>
        </div>
      )
    },
    {name: "Amount",
      accessor: "amount",
      render: (value,row) => (
        <div>
          <p className="font-bold">₹ {value}</p>
          <p className="text-gray-500">{row.paymentMethod}</p>
        </div>
      )
    },
    {name: "Date", accessor: 'date'},
    {name: "Vendor", accessor: "vendor"},
    {name: "Status", accessor: "status",
      render: (value,row) => (
        <div>
          <p className={`${value === "Paid" ? "bg-blue-200 text-blue-800" : value === "Approved" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800" } rounded-xl text-center py-1 `}>{value}</p>
        </div>
      )
    },
    {name: "Actions", accessor: "actions1",
      render: (value, row) => (
        <div className="flex gap-3 text-blue-600 text-lg">
  <BsEye className="cursor-pointer" title="View" />
  <FiEdit className="cursor-pointer text-green-500" title="Edit" />
  <HiOutlineReceiptRefund className="cursor-pointer text-purple-500" title="Receipt" />
</div>

      )
    }
  ]


  return (
    <div className="flex flex-col gap-5">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">
            Expenses
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">
            Track and manage company expenses
          </p>
        </div>
        <div className="flex   gap-2 sm:gap-5 text-sm ">
          <button className="bg-green-400 flex gap-3 p-2 sm:px-3 sm:py-2  items-center  rounded-md text-white">
            <FiDownload className="w-4 h-4 sm:w-6 sm:h-6 " />
            Export
          </button>
          <button className="bg-blue-400 flex gap-3 p-2 sm:px-3 sm:py-2 items-center rounded-md text-white">
            <Plus className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            Add Expense
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        {cardData.map((item, index) => (
          <Card key={index} label={item.label} data={item.data} />
        ))}
      </div>

      {/* Expense Cards */}
      <div className="space-y-4 bg-white p-4 rounded-xl border border-gray-300 shadow-md overflow-x-auto">
        <h1 className="text-xl font-bold text-gray-900">Expense Categories</h1>

        <div className="flex gap-6 w-max">
          {expenseCategories.map((category, idx) => (
            <ExpenseCard key={idx} {...category} />
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
            placeholder="Search by Title"
          />
        </div>
        <div className="flex flex-row gap-4 sm:gap-5 justify-between w-full">
          <select
            name=""
            id=""
            className="border-2 border-gray-300 px-4 py-2 rounded-xl w-full sm:w-1/2"
          >
            <option value="">All Categories</option>
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


      
      {/* Table Section */}

      <div>
        <Table data={expenses} columns={columns}/>
      </div>
    </div>
  );
};

export default Expenses;

const ExpenseCard = ({ name, color, budget, spent }) => {
  const progress = (spent / budget) * 100;

  return (
    <div className="bg-white border rounded-md shadow p-4 w-full max-w-xs">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
        />
        <h2 className="font-semibold text-gray-800">{name}</h2>
      </div>
      <div className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Budget:</span>{" "}
        <span className="font-bold text-black">₹{budget.toLocaleString()}</span>
      </div>
      <div className="text-sm text-gray-600 mb-3">
        <span className="font-medium">Spent:</span>{" "}
        <span className="text-black">₹{spent.toLocaleString()}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 rounded-full"
          style={{ backgroundColor: color, width: `${progress}%` }}
        ></div>
      </div>


    </div>
  );
};
