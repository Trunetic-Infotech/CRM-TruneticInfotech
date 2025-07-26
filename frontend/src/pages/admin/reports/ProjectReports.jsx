import React from "react";
import { FiDownload } from "react-icons/fi";
import Card from "../../../components/Card";
import { Search } from "lucide-react";
import { BiRupee } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";

const ProjectReports = () => {
  const cardData = [
    { label: "Total Projects", data: "3" },
    { label: "Total Budget", data: "₹  4,30,000" },
    { label: "Total Spent", data: "₹  2,05,500" },
    { label: "Efficiency", data: "86%" },
  ];

  const projectReports = [
    {
      title: "E-commerce Platform Development",
      client: "TechCorp Solutions",
      status: "In Progress",
      progress: 65,
      budget: 150000,
      spent: 97500,
      teamSize: 5,
      hoursWorked: 650,
      estimatedHours: 1000,
      efficiency: 85,
      startDate: "2024-01-15",
      endDate: "2024-06-15",
    },
    {
      title: "Mobile Banking App",
      client: "SecureBank Ltd",
      status: "Planning",
      progress: 15,
      budget: 200000,
      spent: 30000,
      teamSize: 6,
      hoursWorked: 200,
      estimatedHours: 1333,
      efficiency: 75,
      startDate: "2024-02-01",
      endDate: "2024-08-01",
    },
    {
      title: "CRM System Upgrade",
      client: "BusinessFlow Inc",
      status: "Completed",
      progress: 100,
      budget: 80000,
      spent: 78000,
      teamSize: 3,
      hoursWorked: 520,
      estimatedHours: 533,
      efficiency: 97,
      startDate: "2023-10-01",
      endDate: "2024-01-01",
    },
    {
      title: "Inventory Management System",
      client: "RetailNet Pvt Ltd",
      status: "In Progress",
      progress: 40,
      budget: 60000,
      spent: 22000,
      teamSize: 4,
      hoursWorked: 310,
      estimatedHours: 800,
      efficiency: 70,
      startDate: "2024-03-01",
      endDate: "2024-08-01",
    },
    {
      title: "Healthcare Portal Development",
      client: "MediConnect Health",
      status: "Planning",
      progress: 10,
      budget: 120000,
      spent: 10000,
      teamSize: 6,
      hoursWorked: 100,
      estimatedHours: 900,
      efficiency: 60,
      startDate: "2024-04-01",
      endDate: "2024-12-01",
    },
    {
      title: "Travel Booking Platform",
      client: "Wanderlust Corp",
      status: "In Progress",
      progress: 55,
      budget: 95000,
      spent: 47000,
      teamSize: 5,
      hoursWorked: 470,
      estimatedHours: 880,
      efficiency: 88,
      startDate: "2024-02-20",
      endDate: "2024-09-15",
    },
    {
      title: "Learning Management System",
      client: "EduPro Systems",
      status: "Completed",
      progress: 100,
      budget: 110000,
      spent: 107000,
      teamSize: 4,
      hoursWorked: 920,
      estimatedHours: 950,
      efficiency: 96,
      startDate: "2023-06-01",
      endDate: "2024-01-15",
    },
    {
      title: "Logistics Optimization Tool",
      client: "MoveIt Logistics",
      status: "In Progress",
      progress: 70,
      budget: 130000,
      spent: 86000,
      teamSize: 5,
      hoursWorked: 580,
      estimatedHours: 920,
      efficiency: 91,
      startDate: "2024-01-05",
      endDate: "2024-09-30",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">
            Project Reports
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">
            Comprehensive project performance analytics
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

      {/* Search Section */}
      <div className="bg-white rounded-xl border border-gray-300 shadow-md px-4 py-6 ">
        <div className="w-full relative">
          <Search className="text-gray-400 absolute top-2.5 left-3" />
          <input
            type="text"
            className="border-2 border-gray-300 w-full pl-10 px-3 py-2 rounded-xl"
            placeholder="Search Project ny name or client"
          />
        </div>
      </div>

      {/* Main Data Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        {projectReports.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-5"
          >
            {/* Card Header */}
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-md">{project.title}</p>
                <p className="text-sm text-gray-500">{project.client}</p>
              </div>
              <div>
                <p
                  className={`text-xs font-medium ${
                    project.status === "In Progress"
                      ? "text-green-800 bg-green-200"
                      : project.status === "Planning"
                      ? "text-blue-800 bg-blue-200"
                      : project.status === "Completed"
                      ? "text-purple-800 bg-purple-200"
                      : "text-yellow-800 bg-yellow-200 "
                  } rounded-xl px-4 py-1`}
                >
                  {project.status}
                </p>
              </div>
            </div>

            {/* Card progress bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-sm text-gray-600 font-medium">
                <p>Progress</p>
                <p>{project.progress}%</p>
              </div>
              <div className="relative bg-gray-400 w-full h-2 rounded-xl">
                <div
                  className="absolute bg-blue-600 h-2 rounded-xl"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Data Cards */}
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-[#f0fcf4] rounded-md p-4">
                <p className="flex items-center text-[#166635] font-medium gap-1">
                  <BiRupee size={18} className="text-[#18a34b]" />
                  Budget
                </p>

                <p className="text-[#14542e] font-bold flex text-base items-center gap-1 ">
                  <BiRupee size={18} className="text-[#18a34b]" />
                  {project.budget.toLocaleString()}
                </p>

                <p className="text-[#15a349] text-xs font-medium flex items-center gap-1 ">
                  Spent:
                  <BiRupee size={14} className="text-[#18a34b]" />
                  {project.spent.toLocaleString()}
                </p>
              </div>
              <div className="bg-[#f0f6ff] rounded-md p-4">
                <p className="flex items-center text-[#1e40b0] font-medium gap-1">
                  <FiUsers size={18} className="text-[#4077ed]" />
                  Team
                </p>
                <p className="text-[#1e3b8a] font-bold flex text-base items-center gap-1 ">
                  <BiRupee size={18} className="text-[#1e3b8a]" />
                  {project.teamSize.toLocaleString()}
                </p>

                <p className="text-[#1e3b8a] text-xs font-medium flex items-center gap-1 ">
                  members
                </p>
              </div>
              <div className="bg-[#faf5ff] rounded-md p-4">
                <p className="flex items-center text-[#6b22ba] font-medium gap-1">
                   <AiOutlineClockCircle size={18} className="text-[#9234eb]"/>
      Hours Worked
                </p>
                <p className="text-[#591c87] font-bold flex text-base items-center gap-1 ">
                 
                  {project.hoursWorked.toLocaleString()}
                </p>

                <p className="text-[#be57eb] text-xs font-medium flex items-center gap-1 ">
                  of 1000 estimated
                </p>
              </div>
              <div className="bg-[#fff7ed] rounded-md p-4">
                <p className="flex items-center text-[#c45c12] font-medium gap-1">
                       <TbTargetArrow size={18} className="text-[#eb5a0c]"/>
      Efficiency
                </p>
                <p className="text-[#a32d12] font-bold flex text-base items-center gap-1 ">
                 
                  {project.efficiency.toLocaleString()}%
                </p>

                <p className="text-[#f07330] text-xs font-medium flex items-center gap-1 ">
                  performance
                </p>
              </div>

            
             
            </div>


            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectReports;
