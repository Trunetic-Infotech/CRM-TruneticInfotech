import React from 'react';

const Table = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg my-6">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-blue-600 text-white">
          <tr>
            {columns.map((clm, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
              >
                {clm.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-blue-50 transition duration-200"
            >
              {columns.map((clm, colIndex) => (
                <td key={colIndex} className="px-6 py-4 text-sm text-gray-800">
                  {clm.accessor === 'actions' ? (
                    <div className="flex space-x-2">
                      <button onClick={()=> {
                        onEdit(row)
                      }} className="px-3 py-1 text-sm text-white bg-green-500 hover:bg-green-600 rounded">
                        Edit
                      </button>
                      <button onClick={()=> {
                        onDelete(row.id)
                      }} className="px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded">
                        Delete
                      </button>
                    </div>
                  ) : (
                    row[clm.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
