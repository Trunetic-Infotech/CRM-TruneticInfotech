import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import Card from "../../components/Card";
import Employee from "../../assets/employee1.png";
import Project from "../../assets/project-management.png";
import AttendanceChart from "./graphs/AttendanceChart";
import SalaryChart from "./graphs/SalaryChart";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const AdminDashboard = () => {
  const attendanceData = [
    { date: "Jul 1", present: 40, absent: 10, leave: 1 },
    { date: "Jul 2", present: 38, absent: 12, leave: 1 },
    { date: "Jul 3", present: 42, absent: 8, leave: 1 },
    { date: "Jul 4", present: 41, absent: 9, leave: 0 },
    { date: "Jul 5", present: 39, absent: 11, leave: 4 },
  ];

  const activity = [
    {
      msg: "👥 New employee *John Doe* joined as *Developer*",
      time: "2 mins ago",
    },
    {
      msg: "📝 Leave request from *Priya Sharma* (3 days)",
      time: "10 mins ago",
    },
    {
      msg: "🧩 Project *ERP System* marked as *Completed*",
      time: "1 hour ago",
    },
  ];

  const [value, setValue] = useState(new Date());
  const [showEvent, setShowEvent] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const events = [
    { date: "2025-07-10", title: "CRM Frontend Completion" },
    { date: "2025-07-11", title: "Client Sync: ABC Corp" },
    { date: "2025-07-12", title: "Priya Sharma's Birthday" },
  ];

  const eventDates = events.map((e) => new Date(e.date).toDateString());

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const d = date.toDateString();
      if (eventDates.includes(d)) {
        return "bg-yellow-100 text-blue-600 font-semibold rounded-full";
      }
    }
  };

  const tileContent = ({ date, view }) => {
    const d = date.toDateString();
    const todayEvents = events.filter(
      (e) => new Date(e.date).toDateString() === d
    );
    return (
      todayEvents.length > 0 && (
        <div className="text-xs mt-1 text-center text-red-500">●</div>
      )
    );
  };

  const handleDayClick = (date) => {
    setValue(date);
    const selectedDate = new Date(date).toDateString();
    const matched = events.filter(
      (e) => new Date(e.date).toDateString() === selectedDate
    );
    setSelectedEvents(matched);
    setShowEvent(true);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-0 md:gap-2">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold pl-7 md:pl-0">
            Welcome Admin!
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

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        <Card label="Total Employees" data="7" icon={Employee} />
        <Card label="Active Projects" data="3" icon={Project} />
        <Card label="Projects Completed" data="2" icon={Employee} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full lg:w-1/2">
          <AttendanceChart data={attendanceData} height={300} />
        </div>
        <div className="w-full lg:w-1/2">
          <SalaryChart height={300} />
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-5">
        <div className="bg-white rounded-lg shadow p-4  overflow-y-auto">
          <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {activity.map((item, idx) => (
              <li key={idx} className="border-b pb-2">
                <p dangerouslySetInnerHTML={{ __html: item.msg }} />
                <span className="text-xs text-gray-400">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-5">
            📅 Company Calendar
          </h3>

          <div className="">
            <Calendar
              onChange={setValue}
              value={value}
              onClickDay={handleDayClick}
              tileClassName={tileClassName}
              tileContent={tileContent}
              className="rounded-lg overflow-hidden"
            />
          </div>

          {showEvent && (
            <div className="mt-6  transition-all duration-300 ease-in-out">
              {selectedEvents.length > 0 ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
                  <h4 className="text-md font-semibold text-blue-700 mb-2">
                    Events on {value.toDateString()}:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {selectedEvents.map((event, idx) => (
                      <li
                        key={idx}
                        className="p-2 bg-white rounded border border-blue-100 shadow-sm hover:bg-blue-100 transition"
                      >
                        {event.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="text-gray-500 text-sm italic mt-2">
                  No events on {value.toDateString()}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
