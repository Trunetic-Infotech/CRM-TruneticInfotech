import React from "react";
import { FiDownload, FiUpload } from "react-icons/fi";
import Client from "../../../assets/Client.png";
import Card from "../../../components/Card";
import { Eye, Pencil, Search, Trash2 } from "lucide-react";
import { ArrowRight } from "lucide-react";

const AllClients = () => {
  const cardData = [
    { label: "Total Clients", data: "6", icon: Client },
    { label: "Active Clients", data: "6", icon: Client },
    { label: "Prospects", data: "6", icon: Client },
  ];

  const clients = [
    {
      name: "TechCorp Solutions",
      companyName: "TechCorp Solutions Inc.",
      email: "contact@techcorp.com",
      phone: "+1 555-0123",
      industry: "Technology",
      location: "San Francisco, USA",
      status: "Active",
      type: "Enterprise",
      projects: 5,
      revenue: 450000,
      joined: "1/15/2023",
      website: "https://www.techcorp.com",
    },
    {
      name: "SecureBank Ltd",
      companyName: "SecureBank Limited",
      email: "projects@securebank.com",
      phone: "+1 555-0456",
      industry: "Banking & Finance",
      location: "New York, USA",
      status: "Active",
      type: "Enterprise",
      projects: 3,
      revenue: 320000,
      joined: "8/20/2022",
      website: "https://www.securebank.com",
    },
    {
      name: "BusinessFlow Inc",
      companyName: "BusinessFlow Incorporated",
      email: "info@businessflow.com",
      phone: "+1 555-0789",
      industry: "Business Services",
      location: "Chicago, USA",
      status: "Active",
      type: "SMB",
      projects: 2,
      revenue: 125000,
      joined: "3/10/2023",
      website: "https://www.businessflow.com",
    },
    {
      name: "SupportDesk Pro",
      companyName: "SupportDesk Pro LLC",
      email: "hello@supportdesk.com",
      phone: "+1 555-0321",
      industry: "Software",
      location: "Austin, USA",
      status: "Prospect",
      type: "Startup",
      projects: 1,
      revenue: 45000,
      joined: "1/5/2024",
      website: "https://www.supportdesk.com",
    },
    {
      name: "DataFlow Systems",
      companyName: "DataFlow Systems Corp",
      email: "contact@dataflow.com",
      phone: "+1 555-0654",
      industry: "Data Analytics",
      location: "Seattle, USA",
      status: "Former",
      type: "Enterprise",
      projects: 4,
      revenue: 280000,
      joined: "6/15/2021",
      website: "https://www.dataflow.com",
    },
    {
      name: "InnovateLab",
      companyName: "InnovateLab Technologies",
      email: "projects@innovatelab.com",
      phone: "+1 555-0987",
      industry: "Research & Development",
      location: "Boston, USA",
      status: "Active",
      type: "SMB",
      projects: 2,
      revenue: 95000,
      joined: "9/12/2023",
      website: "https://www.innovatelab.com",
    },
  ];

  const getInitials = (name) => {
    const words = name.trim().split(" ");
    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">
            All Clients
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">
            Manage and view all client information
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

      <div className="grid grid-cols-2 lg:grid-cols-3  gap-3 place-items-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            label={card.label}
            data={card.data}
            icon={card.icon}
            className={
              index === cardData.length - 1 ? "col-span-2 lg:col-span-1" : ""
            }
          />
        ))}
      </div>

      {/* Search and filter section */}
      <div className="bg-white grid grid-cols-2 w-full gap-5 shadow-md px-4 py-8 rounded-xl border border-gray-300">
        {/* Search */}
        <div className="w-full relative">
          <Search className="text-gray-400 absolute top-2.5 left-3" />
          <input
            type="text"
            className="border-2 border-gray-300 w-full pl-10 px-3 py-2 rounded-xl"
            placeholder="Search Clients by name, company, email or Id"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between w-full">
          <select
            name=""
            id=""
            className="border-2 border-gray-300 px-4 py-2 rounded-xl w-full sm:w-1/2"
          >
            <option value="">All Types</option>
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

      {/* main data section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {clients.map((cli, index) => (
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-3">
            <div className="flex justify-between ">
                {/* title */}
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                  {getInitials(cli.name)}
                </div>
                <div>
                  <p className="text-lg font-medium">{cli.name}</p>
                  <p className="text-sm font-medium text-gray-500">{cli.companyName}</p>
                </div>
              </div>
                {/* Icons */}
              <div className="flex gap-2 items-start justify-end">
                <div title="Edit">
                  <Pencil
                    size={16}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  />
                </div>
                <div title="View">
                  <Eye
                    size={16}
                    className="text-gray-600 hover:text-black cursor-pointer"
                  />
                </div>
                <div title="Delete">
                  <Trash2
                    size={16}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col text-sm gap-2">
                <div className="flex gap-4">
                    <p className="text-gray-400 font-medium">Email:</p>
                    <p className="font-medium">{cli.email}</p>
                </div>
                <div className="flex gap-4">
                    <p className="text-gray-400 font-medium">Phone:</p>
                    <p className="font-medium">{cli.phone}</p>
                </div>
                <div className="flex gap-4">
                    <p className="text-gray-400 font-medium">Industry:</p>
                    <p className="font-medium">{cli.industry}</p>
                </div>
                <div className="flex gap-4">
                    <p className="text-gray-400 font-medium">Location:</p>
                    <p className="font-medium">{cli.location}</p>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="bg-green-200 px-4 text-green-800 text-sm font-medium py-1 rounded-full">{cli.status}</p>
                <p className="bg-blue-600 px-4 text-white text-sm font-medium py-1 rounded-full">{cli.type}</p>
            </div>


            <div className="flex flex-col text-sm gap-2">
                <div className="flex justify-between">
                    <p className="text-gray-400 font-medium">Projects:</p>
                    <p className="font-medium">{cli.projects}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-400 font-medium">Revenue:</p>
                    <p className="font-medium">₹ {" "} {cli.revenue}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-400 font-medium">Joined:</p>
                    <p className="font-medium">{cli.joined}</p>
                </div>
            </div>

            <hr className=" border-gray-300" />

                <div className="">
                    <a href={cli.website} target="_blank"   rel="noopener noreferrer"
      className="text-blue-600 hover:underline mt-2 inline-block flex items-center gap-2 text-sm font-medium"> Visit website  <ArrowRight size={16} /> </a>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClients;
