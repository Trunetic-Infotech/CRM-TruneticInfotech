import { Building, Mail } from 'lucide-react';
import React, { useState } from 'react';

const TeamMember = [
  {
    id: 1,
    name: 'Sarah Johnson',
    designation: 'Project Manager',
    status: 'available',
    email: 'sarah.j@company.com',
    department: 'Management',
    activeProjects: 3,
    completedProjects: 45,
    completedTasks: 10,
    efficiency: 92,
    skills: ['Project Management', 'Agile', 'Leadership'],
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    designation: 'Full Stack Developer',
    status: 'busy',
    email: 'michael.c@company.com',
    department: 'Development',
    activeProjects: 2,
    completedProjects: 67,
    completedTasks: 10,
    efficiency: 88,
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    designation: 'UI/UX Designer',
    status: 'available',
    email: 'emily.r@company.com',
    department: 'Design',
    activeProjects: 2,
    completedProjects: 38,
    completedTasks: 10,
    efficiency: 95,
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping'],
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 4,
    name: 'David Kim',
    designation: 'Senior Developer',
    status: 'away',
    email: 'david.k@company.com',
    department: 'Development',
    activeProjects: 1,
    completedProjects: 52,
    completedTasks: 10,
    efficiency: 90,
    skills: ['React Native', 'Firebase', 'Mobile Development'],
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
];

const Team = () => {
  const [completedTask, setCompletedTask] = useState(false);
  const [taskName, setTaskName] = useState('');

  const handleAssignTask = (e) => {
    e.preventDefault();
    alert(`Task "${taskName}" assigned!`);
    setTaskName('');
    setCompletedTask(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-green-500 bg-green-100';
      case 'busy':
        return 'text-yellow-500 bg-yellow-100';
      case 'away':
        return 'text-red-500 bg-red-100';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-0 md:gap-2 justify-between">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold pl-7 md:pl-0">
          Team Managements!
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 pl-7 md:pl-0">
          Here's what's happening in your organization!
        </p>
      </div>

      <div className="bg-white w-full p-6 rounded-lg shadow-md mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TeamMember.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img className="h-12 w-12 rounded-full object-cover" src={item.avatar} alt={item.name} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.designation}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {item.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Building className="h-4 w-4 mr-2" />
                  {item.department}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-600">Active Projects:</span>
                  <span className="font-medium text-gray-900 ml-1">{item.activeProjects}</span>
                </div>
                <div>
                  <span className="text-gray-600">Completed:</span>
                  <span className="font-medium text-gray-900 ml-1">{item.completedTasks}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Efficiency</span>
                  <span className="text-sm text-gray-500">{item.efficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${item.efficiency}%` }} />
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    {skill}
                  </span>
                ))}
                {item.skills.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                    +{item.skills.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <button className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  View Profile
                </button>
                <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors" onClick={() => setCompletedTask(true)}>
                  Assign Task
                </button>
              </div>
            </div>
          ))}
        </div>

        {completedTask && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Assign Task</h2>
              <form onSubmit={handleAssignTask}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Task Name</label>
                  <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Assign
                  </button>
                  <button type="button" onClick={() => setCompletedTask(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
