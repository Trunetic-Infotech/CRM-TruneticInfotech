import React from "react";
import { FiDownload, FiUpload } from "react-icons/fi";
import { Label } from "recharts";
import Trending from "../../../assets/Trending.png";
import Card from "../../../components/Card";
import Kanban from "../../../assets/kanban.png";
import Check from "../../../assets/check.png";
import { Search } from "lucide-react";
import { Pencil, Eye, Trash2 } from "lucide-react";

const AllProjects = () => {
  const cardData = [
    { label: "Total Projects", data: "5", icon: Trending },
    { label: "Active Projects", data: "2", icon: Kanban },
    { label: "Completed Projects", data: "1", icon: Check },
  ];

  const projectData = [
    {
      title: "E-commerce Platform Development",
      company: "TechCorp Solutions",
      description:
        "Building a modern e-commerce platform with React and Node.js",
      status: "In Progress",
      priority: "High",
      progress: 65,
      budget: 150000,
      dueDate: "2024-06-15",
      teamSize: 3,
      tags: ["React", "Node.js", "MongoDB", "+1 more"],
    },
    {
      title: "Mobile Banking App",
      company: "SecureBank Ltd",
      description:
        "Cross-platform mobile banking application with advanced security features",
      status: "Planning",
      priority: "Critical",
      progress: 15,
      budget: 200000,
      dueDate: "2024-08-01",
      teamSize: 3,
      tags: ["React Native", "Firebase", "Blockchain"],
    },
    {
      title: "CRM System Upgrade",
      company: "BusinessFlow Inc",
      description:
        "Upgrading existing CRM system with new features and modern UI",
      status: "Completed",
      priority: "Medium",
      progress: 100,
      budget: 80000,
      dueDate: "2024-01-01",
      teamSize: 2,
      tags: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      title: "AI Chatbot Integration",
      company: "SupportDesk Pro",
      description: "Implementing AI-powered chatbot for customer support",
      status: "On Hold",
      priority: "Low",
      progress: 30,
      budget: 60000,
      dueDate: "2024-05-01",
      teamSize: 2,
      tags: ["Python", "TensorFlow", "NLP"],
    },
    {
      title: "Cloud Migration Project",
      company: "DataFlow Systems",
      description: "Migrating legacy systems to cloud infrastructure",
      status: "In Progress",
      priority: "High",
      progress: 45,
      budget: 120000,
      dueDate: "2024-04-20",
      teamSize: 4,
      tags: ["AWS", "Docker", "Kubernetes"],
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">
            All Projects
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">
            Manage and track all project information
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {cardData.map((card, index) => (
          <Card label={card.label} data={card.data} icon={card.icon} />
        ))}
      </div>

      <div className="bg-white shadow-md w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-4 py-8 rounded-xl">
        {/* Search Bar */}
        <div className="w-full relative">
          <Search className="text-gray-400 absolute top-2.5 left-3" />
          <input
            type="text"
            className="w-full pl-10 px-3 py-2 rounded-xl border-2 border-gray-400"
            placeholder="Search projects by name, client or ID"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between w-full">
          <select className="border-2 border-gray-400 px-4 py-2 rounded-xl w-full sm:w-1/2">
            <option value="">All Categories</option>
          </select>
          <select className="border-2 border-gray-400 px-4 py-2 rounded-xl w-full sm:w-1/2">
            <option value="">All Status</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 ">
        {projectData.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-300 flex flex-col"
          >
            <div className="flex justify-between p-4">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-md">{data.title}</p>
                <p className="text-gray-400 font-medium text-sm">
                  {data.company}
                </p>
              </div>
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
            <div>
              <p className="text-sm text-start px-4 text-gray-600">
                {data.description}
              </p>
            </div>
            <div className="flex justify-between p-4">
              <p className="bg-green-300 px-3 py-1 rounded-full text-sm text-green-900 font-medium">
                {data.status}
              </p>
              <p className="bg-red-300 px-3 py-1 rounded-full text-sm text-red-900 font-medium">
                {data.priority}
              </p>
            </div>

            <div className="px-4">
              <div className="flex justify-between ">
                <p className="text-md">Progress</p>
                <p className="text-md">{data.progress} %</p>
              </div>

              <div className="flex justify-center">
                <div className="relative bg-gray-300 rounded-md h-3 w-full">
                  <div
                    className="absolute h-3 bg-blue-500 rounded-md"
                    style={{ width: `${data.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="p-4 text-sm">
              <div className="flex justify-between ">
                <p className="text-gray-500">Budget:</p>
                <p className="font-medium">₹ {data.budget}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Due Date:</p>
                <p>{data.dueDate}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Team:</p>
                <p>
                  {data.teamSize} <span>members</span>
                </p>
              </div>
            </div>

            <hr className=" border-gray-300 mx-4" />

            <div className="flex flex-wrap gap-2 p-4">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
