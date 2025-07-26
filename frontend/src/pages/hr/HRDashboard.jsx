import React from 'react';
import { FiBell, FiSettings } from 'react-icons/fi';
import { FaAward as Award } from 'react-icons/fa';
import Card from '../../components/Card';

// Employee Stats
const EmployeeIcon = [
  { label: "Total Employees", data: "10", icon: "👥" },
  { label: "Total Active Employees", data: "8", icon: "👨‍💼" },
  { label: "Total Departments", data: "5", icon: "🏢" },
  { label: "Total Live Projects", data: "3", icon: "📽️" }
];

// Dummy Top Performers
const topPerformers = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    avatar: "https://i.pravatar.cc/300?img=1",
    score: "98"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    avatar: "https://i.pravatar.cc/300?img=2",
    score: "95"
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "UX Designer",
    avatar: "https://i.pravatar.cc/300?img=3",
    score: "93"
  }
];

const HRDashboard = () => {
  return (
      <div className="flex flex-col gap-5 w-full">
         <div className="flex justify-between ">
           <div className="flex flex-col gap-0 md:gap-2">
             <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold pl-7 md:pl-0">
               Welcome HR!
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
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-between space-x-2">
        {EmployeeIcon.map((item, index) => (
          <Card key={index} label={item.label} data={item.data} icon={item.icon} />
        ))}
      </div>

      {/* Chart Area */}
      <div className="bg-white p-5 rounded-xl shadow border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Hires</h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {[
            { month: 'Jan', value: 45, hires: 12 },
            { month: 'Feb', value: 52, hires: 15 },
            { month: 'Mar', value: 48, hires: 8 },
            { month: 'Apr', value: 61, hires: 18 },
            { month: 'May', value: 55, hires: 14 },
            { month: 'Jun', value: 67, hires: 22 },
            { month: 'Jul', value: 73, hires: 19 },
            { month: 'Aug', value: 69, hires: 16 },
            { month: 'Sep', value: 76, hires: 21 },
            { month: 'Oct', value: 82, hires: 25 },
            { month: 'Nov', value: 78, hires: 20 },
            { month: 'Dec', value: 85, hires: 23 }
          ].map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center group">
              <div
                className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm hover:from-blue-600 hover:to-blue-500 transition-all duration-300 cursor-pointer"
                style={{ height: `${(data.value / 100) * 200}px` }}
                title={`${data.month}: ${data.hires} new hires`}
              />
              <span className="text-xs text-gray-500 mt-1 font-medium">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performers Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
            <p className="text-sm text-gray-500">This quarter</p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {topPerformers.map((performer, index) => (
            <div
              key={performer.id}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={performer.avatar}
                alt={performer.name}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{performer.name}</p>
                <p className="text-xs text-gray-500 truncate">{performer.position}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-gray-900">{performer.score}</span>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  #{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
