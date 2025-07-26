import React, { useState, useEffect } from "react";

const EmployeeModal = ({ onClose, onSave, initialData }) => {
  const [form, setForm] = useState(
    initialData || {
      name: "",
      manager: "",
      department: "",
      projects: 0,
      budget: "",
      extension: "",
      status: "active",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave({ ...form, id: initialData?.id || Date.now() });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-lg space-y-4">
        <h2 className="text-xl font-bold">{initialData ? "Edit" : "Add"} Employee</h2>

        {["name", "manager", "department", "projects", "budget", "extension", "status"].map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key}
            className="w-full border px-3 py-2 rounded"
          />
        ))}

        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 border rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
