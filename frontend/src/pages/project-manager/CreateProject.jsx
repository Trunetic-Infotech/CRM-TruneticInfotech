import { Edit, Eye, MoreHorizontal, Plus, WorkflowIcon } from 'lucide-react';
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    name: 'Project Alpha',
    department: 'Engineering',
    type: 'Joining Docs',
    status: 'In Progress',
    category: 'Joining Docs',
    priority: 'High',
    progress: 40,
    budget: 50000,
    teamSize: 5,
    tasks: 10,
    endDate: '2025-08-01',
    manager: 'Alice Johnson',
    managerAvatar: 'https://i.pravatar.cc/100?img=1',
    client: 'Client A',
    description: 'Streamlining onboarding processes.'
  },
  {
    id: 2,
    name: 'Project Beta',
    department: 'Marketing',
    type: 'ID Proof',
    status: 'Completed',
    category: 'ID Proof',
    priority: 'Medium',
    progress: 100,
    budget: 30000,
    teamSize: 3,
    tasks: 5,
    endDate: '2025-07-10',
    manager: 'Bob Smith',
    managerAvatar: 'https://i.pravatar.cc/100?img=2',
    client: 'Client B',
    description: 'Verifying staff identification.'
  },
  {
    id: 3,
    name: 'Project Gamma',
    department: 'Sales',
    type: 'Joining Docs',
    status: 'Not Started',
    category: 'Joining Docs',
    priority: 'Low',
    progress: 0,
    budget: 20000,
    teamSize: 4,
    tasks: 8,
    endDate: '2025-09-01',
    manager: 'Charlie Evans',
    managerAvatar: 'https://i.pravatar.cc/100?img=3',
    client: 'Client C',
    description: 'Preparing onboarding kits for new hires.'
  },
  {
    id: 4,
    name: 'Project Delta',
    department: 'HR',
    type: 'ID Proof',
    status: 'In Progress',
    category: 'ID Proof',
    priority: 'Medium',
    progress: 60,
    budget: 45000,
    teamSize: 6,
    tasks: 12,
    endDate: '2025-08-15',
    manager: 'Dana White',
    managerAvatar: 'https://i.pravatar.cc/100?img=4',
    client: 'Client D',
    description: 'Ensuring compliance with verification policies.'
  }
];

const CreateProject = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedDepartment, setSelectedDepartment] = React.useState('all');
  const [selectedType, setSelectedType] = React.useState('all');
  const [showModal, setShowModal] = React.useState(false);
  const departments = ['HR', 'Engineering', 'Marketing', 'Sales']; // Example departments
  const types = ['Joining Docs', 'ID Proof']; // Example types  
  
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Joining Docs':
        return <WorkflowIcon className="h-4 w-4" />;
      case 'ID Proof':
        return <Eye className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'text-yellow-500';
      case 'Completed':
        return 'text-green-500';
      case 'Not Started':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'text-red-500';
    case 'Medium':
      return 'text-yellow-500';
    case 'Low':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
};

  return (
    <div className="flex flex-col gap-5 w-full">
           <div className="flex flex-col gap-0 md:gap-2 justify-between">
             <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold pl-7 md:pl-0">
               Welcome Project Manager!
             </p>
             <p className="text-base sm:text-lg md:text-xl text-gray-500 pl-7 md:pl-0">
               Here's what's happening in your organization!
             </p>
           </div>
        {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row justify-between w-full bg-white p-6 rounded-lg border-2 border-gray-300 gap-4">
              {/* Search */}
              <div className="w-full lg:w-1/2 relative">
                <input
                  type="text"
                  className="border-2 rounded-md p-2 border-gray-300 text-xl w-full pl-10"
                  placeholder="Search employees by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="text-gray-400 w-5 h-5 absolute top-3.5 left-3.5" />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center justify-end w-full lg:w-1/2">
                <div className="flex gap-2 items-center">
                  <FiFilter size={20} className="text-gray-400" />
                  <select
                    className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    <option value="all">All Departments</option>
                    {departments.map((dept, i) => (
                      <option key={i} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <select
                  className="border-2 border-gray-300 px-4 py-2 rounded-md text-base"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="joining">Joining Docs</option>
                  <option value="id">ID Proof</option>
                </select>

                <button
                  className="border-2 border-gray-300 px-4 py-2 rounded-md text-base flex items-center"
                  onClick={() => setShowModal(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </button>
              </div>
            </div>
        {/* Task List */}
        <div className="mt-6">
          <div >
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  {getCategoryIcon(project.category)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.client}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>

            <div className="flex items-center justify-between mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                {project.priority}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-gray-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-950 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="text-gray-600">Budget:</span>
                <span className="font-medium text-gray-900 ml-1">${project.budget}</span>
              </div>
              <div>
                <span className="text-gray-600">Team:</span>
                <span className="font-medium text-gray-900 ml-1">{project.teamSize} members</span>
              </div>
              <div>
                <span className="text-gray-600">Tasks:</span>
                <span className="font-medium text-gray-900 ml-1">{project.tasks}/{project.tasks}</span>
              </div>
              <div>
                <span className="text-gray-600">Due:</span>
                <span className="font-medium text-gray-900 ml-1">{project.endDate}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  className="h-6 w-6 rounded-full object-cover"
                  src={project.managerAvatar}
                  alt={project.manager}
                />
                <span className="text-sm text-gray-600">{project.manager}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-blue-600 hover:text-blue-700 p-1 rounded hover:bg-blue-50">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="text-gray-600 hover:text-gray-700 p-1 rounded hover:bg-gray-50">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

          </div>

        </div>
           {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Add New Task</h2>
                {/* Add your form here */}
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
            )}

    </div>
  )
}

export default CreateProject