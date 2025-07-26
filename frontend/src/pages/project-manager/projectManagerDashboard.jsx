import React from 'react'
import { FiBell, FiSettings } from 'react-icons/fi'
import Card from '../../components/Card'
import { DollarSign, FolderOpen, MessageSquare, Target, Users } from 'lucide-react'



const projectManagerDashboard = () => {

const EmployeeIcon =[
  {    label: "Total Projects",
    data: "15",
    icon: "📽️"}
  ,{    label: "Active Projects",
    data: "10",
    icon: "📽️"}
  ,{    label: "Completed Projects",
    data: "5",
    icon: "📽️"}
  ,{    label: "Ongoing Projects",
    data: "5",
    icon: "📽️"}
]

const projects = [
  { id: 1, name: 'Project Alpha', status: 'active', category: 'web-development', client: 'Client A', budget: 50000, progress: 75 },
  { id: 2, name: 'Project Beta', status: 'active', category: 'mobile-app', client: 'Client B', budget: 30000, progress: 50 },
  { id: 3, name: 'Project Gamma', status: 'completed', category: 'design', client: 'Client C', budget: 20000, progress: 100 },
  { id: 4, name: 'Project Delta', status: 'active', category: 'marketing', client: 'Client D', budget: 40000, progress: 60 },
  { id: 5, name: 'Project Epsilon', status: 'active', category: 'web-development', client: 'Client E', budget: 70000, progress: 80 },
]


const teamMembers = [
  { id: 1, name: 'Alice Johnson', role: 'Developer', efficiency: 85, availability: 'Available', avatar: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Bob Smith', role: 'Designer', efficiency  : 90, availability: 'Busy', avatar: 'https://via.placeholder.com/40' },
  { id: 3, name: 'Charlie Brown', role: 'Project Manager', efficiency: 95, availability: 'Available', avatar: 'https://via.placeholder.com/40' },
  { id: 4, name: 'Diana Prince', role: 'QA Engineer', efficiency: 80, availability: 'Busy', avatar: 'https://via.placeholder.com/40' },
  { id: 5, name: 'Ethan Green', role: 'Backend Developer', efficiency: 90, availability: 'Available', avatar: 'https://via.placeholder.com/40' },
]

const getCategoryIcon = (category) => {
  switch (category) {
    case 'web-development':
      return '🌐';
    case 'mobile-app':
      return '📱';
    case 'design':
      return '🎨';
    case 'marketing':
      return '📈';
    default:
      return '📁';
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'active':
      return 'text-green-500';
    case 'completed':
      return 'text-blue-500'; 
    case 'on-hold':
      return 'text-yellow-500';
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high':
      return 'text-red-500';
    case 'medium':
      return 'text-yellow-500';
    case 'low':
      return 'text-green-500';
  }
};
 
const tasks = [
  { id: 1, title: 'Design Homepage', projectName: 'Project Alpha', assignee: 'Alice Johnson', assigneeAvatar: 'https://via.placeholder.com/40', status: 'in-progress', priority: 'high', dueDate: '2023-10-15', comments: 2 },
  { id: 2, title: 'Develop API', projectName: 'Project Beta', assignee: 'Bob Smith', assigneeAvatar: 'https://via.placeholder.com/40', status: 'completed', priority: 'medium', dueDate: '2023-10-20', comments: 5 },
  { id: 3, title: 'Test Application', projectName: 'Project Gamma', assignee: 'Charlie Brown', assigneeAvatar: 'https://via.placeholder.com/40', status: 'pending', priority: 'low', dueDate: '2023-10-25', comments: 1 },
  { id: 4, title: 'Launch Marketing Campaign', projectName: 'Project Delta', assignee: 'Diana Prince', assigneeAvatar: 'https://via.placeholder.com/40', status: 'in-progress', priority: 'high', dueDate: '2023-10-30', comments: 3 }
];

return (
     <div className="flex flex-col gap-5 w-full">
         <div className="flex justify-between ">
           <div className="flex flex-col gap-0 md:gap-2">
             <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold pl-7 md:pl-0">
               Welcome Project Manager!
             </p>
             <p className="text-base sm:text-lg md:text-xl text-gray-500 pl-7 md:pl-0">
               Here's what's happening in your organization!
             </p>
           </div>
   
           <div>
             <div className="flex gap-5 items-center justify-center">
               <div>
                 <FiBell className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 hover:text-blue-500 transition duration-200 " />
               </div>
               <div>
                 <FiSettings className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 hover:text-blue-500 transition duration-200" />
               </div>
             </div>
           </div>
         </div>

      {/* Employee Stats Cards */}
      <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-between space-x-2">
        {EmployeeIcon.map((item, index) => (
          <Card key={index} label={item.label} data={item.data} icon={item.icon} />
        ))}
      </div>
      <div className="">
 {/* Recent Projects & Team Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Projects */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Active Projects</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {projects.filter(p => p.status === 'active').slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{project.name}</p>
                    <p className="text-xs text-gray-500">{project.client}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{project.progress}%</p>
                  <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Performance */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Team Performance</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {teamMembers.slice(0, 4).map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{member.efficiency}%</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.availability)}`}>
                    {member.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Timeline & Recent Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Project Categories */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Categories</h3>
          <div className="space-y-4">
            {[
              { category: 'web-development', count: projects.filter(p => p.category === 'web-development').length, label: 'Web Development' },
              { category: 'mobile-app', count: projects.filter(p => p.category === 'mobile-app').length, label: 'Mobile Apps' },
              { category: 'design', count: projects.filter(p => p.category === 'design').length, label: 'Design' },
              { category: 'marketing', count: projects.filter(p => p.category === 'marketing').length, label: 'Marketing' }
            ].map((item) => (
              <div key={item.category} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Tasks</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {tasks.slice(0, 3).map((task) => (
              <div key={task.id} className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-start space-x-3">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={task.assigneeAvatar}
                    alt={task.assignee}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{task.title}</p>
                    <p className="text-xs text-gray-500 mb-2">{task.projectName}</p>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                        {task.status.replace('-', ' ')}
                      </span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <MessageSquare className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{task.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      </div>

  )
}

export default projectManagerDashboard