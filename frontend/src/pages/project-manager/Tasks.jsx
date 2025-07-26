import React, { useState } from "react";
import Card from "../../components/Card";
import { Columns, Plus } from "lucide-react";
import Table from './../../components/Table';

const EmployeeIcon = [
  { label: "Today Tasks", data: "10", icon: "👥" },
  { label: "Pending Tasks", data: "8", icon: "👨‍💼" },
  { label: "Urgent Tasks", data: "5", icon: "🏢" },
  { label: "Completed Tasks", data: "3", icon: "📽️" },
];

const ColumnsData = [
  { name: "ID", accessor: "id" },
  { name: "Name", accessor: "name" },
  { name: "Task", accessor: "task" },
  { name: "Project", accessor: "project" },
  { name: "Assignee", accessor: "assignee" },
  { name: "Status", accessor: "status" },
];

const EmployeeData = [
  { id: 1, name: "John Doe", task: "Design Homepage", project: "Website Redesign", assignee: "Alice", status: "In Progress" },
  { id: 2, name: "Jane Smith", task: "Develop API", project: "Mobile App", assignee: "Bob", status: "Completed" },
  { id: 3, name: "Mike Johnson", task: "Write Documentation", project: "Internal Tools", assignee: "Charlie", status: "Pending" },
  { id: 4, name: "Emily Davis", task: "Test Application", project: "E-commerce Site", assignee: "David", status: "In Progress" },
  { id: 5, name: "Chris Lee", task: "Deploy to Production", project: "Website Redesign", assignee: "Eve", status: "Urgent" },
];

const Tasks = () => {
 const [showModal, setShowModal] = useState(false);
  return (
     <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-0 md:gap-2">

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold pl-7 md:pl-0">Task Managements and assignments</h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-500 pl-7 md:pl-0">
        Manage your tasks efficiently with our task management system.
      </p>
        </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {EmployeeIcon.map((item, index) => (
            <Card
              key={index}
              label={item.label}
              data={item.data}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 bg-slate-50 w-full p-6 rounded-lg shadow-md">
        <div className="grid sm:grid-cols-1  gap-6">
          <div className="flex w-full justify-between">
            <h1 className="text-2xl font-bold">Task Managements</h1>
            <button
              className="flex items-center p-8 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors "
               onClick={() => setShowModal(true)}
            >
              <Plus className="h-6 w-6 text-blue-50" />
              <span className="text-black font-semibold">Add Task</span>
            </button>
          </div>
        </div>
          {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-[90%] max-w-lg space-y-4">
              <h2 className="text-xl font-bold">Add New Task</h2>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Task Name"
                className="w-full border px-3 py-2 rounded"
              />
              <label className="block text-sm font-medium mb-2"> Assignee Person Name</label>
              <input
                type="text"
                placeholder="Assignee Person Name"
                className="w-full border px-3 py-2 rounded"
              />
               <label className="block text-sm font-medium mb-2"> Project </label>
              <input
                type="text"
                placeholder="Task Project Name"
                className="w-full border px-3 py-2 rounded"
              />
              <label className="block text-sm font-medium mb-2">Task Description</label>
              <textarea
                placeholder="Task Description"
                className="w-full border px-3 py-2 rounded"
              ></textarea>
              <div className="flex justify-end gap-3">
                <button
                  className="px-4 py-2 border rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={() => setShowModal(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 ">
        <Table columns={ColumnsData} data={EmployeeData}/>
      </div>
   
    </div>
  );
};

export default Tasks;
