import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salaryData = [
  { department: "IT", total: 850000 },
  { department: "HR", total: 430000 },
  { department: "Marketing", total: 390000 },
  { department: "Finance", total: 310000 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const SalaryChart = ({height}) => {
  return (
    <div className="w-full  bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Salary Distribution by Department
      </h2>

      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={salaryData}
            dataKey="total"
            nameKey="department"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={({ department, percent }) =>
              `${department} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {salaryData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `₹${value.toLocaleString()}`}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryChart;
