import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddButton = ({ data, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="mb-4 flex items-center justify-center sm:justify-start space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
    >
      <FaPlus className="w-4 h-4 shrink-0" />
      <span className="text-sm sm:inline hidden">{data}</span>
    </button>
  );
};

export default AddButton;
