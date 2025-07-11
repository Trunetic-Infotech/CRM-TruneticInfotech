import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = ({ data, height }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Attendance Overview</h2>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="present" fill="#10B981" name="Present" />
          <Bar dataKey="absent" fill="#EF4444" name="Absent" />
          <Bar dataKey="leave" fill="#facc15" name="Leave" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
