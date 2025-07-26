import React from 'react';
import { MdEmail } from 'react-icons/md'; // Material Design
import { MdPhone } from 'react-icons/md'; // Material Design


// const Table = ({ columns, data, onEdit, onDelete, profile = false, attendance = false }) => {
//   return (
//     <div className="overflow-x-auto rounded-lg shadow-lg my-6">
//       <table className="min-w-full divide-y divide-gray-200 bg-white">
//         <thead className="bg-blue-600 text-white">
//           <tr>
//             {columns.map((clm, index) => (
//               <th
//                 key={index}
//                 className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
//               >
//                 {clm.name}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-100">
//           {data.map((row, rowIndex) => (
//             <tr
//               key={rowIndex}
//               className="hover:bg-blue-50 transition duration-200"
//             >
//               {columns.map((clm, colIndex) => (
//                 <td key={colIndex} className="px-6 py-4 text-sm text-gray-800">
//                   {clm.accessor === 'actions' ? (
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => onEdit(row)}
//                         className="px-3 py-1 text-sm text-white bg-green-500 hover:bg-green-600 rounded"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => onDelete(row.id)}
//                         className="px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   ) : profile && clm.accessor === 'contact' ? (
//                     <div className='flex flex-col justify-center gap-2'>
                      
//                       <p className='flex items-center gap-2 text-black'><MdEmail className="text-black" /> {row["email"]}</p>
//                       <p className='text-gray-600 flex items-center gap-2' ><MdPhone className="text-gray-600" /> {row["phone"]}</p>
//                     </div>
//                   ) :  profile && clm.accessor === 'name' ? (
//                     <div className='flex items-center gap-2'>
//                       <img
//                       src={row["img"]}
//                       alt="Profile"
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                       <p>{row[clm.accessor]}</p>
//                     </div>
//                   ) :  profile && clm.accessor === 'department' ? (
//                     <div className='flex flex-col  gap-2'>
//                      <p className='font-bold'>{row["department"]}</p>
//                      <p className='text-sm text-gray-
//                      400'>{row["role"]}</p>
//                     </div>
//                   ):  profile && attendance && clm.accessor === 'status' ? (
//                     <div className={`flex flex-col gap-2 ${row["status"] === "Absent" ? "bg-red-200" : "bg-green-200" } rounded-xl text-center p-1`}>
//                      <p className={`font-bold ${row["status"] === "Absent" ? "text-red-900" : "text-green-900"}`}>{row["status"]}</p>
                    
//                     </div>
//                   ): (
//                     row[clm.accessor]
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

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
            <tr key={rowIndex} className="hover:bg-blue-50 transition duration-200">
              {columns.map((clm, colIndex) => (
                <td key={colIndex} className="px-6 py-4 text-sm text-gray-800">
                  {clm.accessor === 'actions' ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onEdit(row)}
                        className="px-3 py-1 text-sm text-white bg-green-500 hover:bg-green-600 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(row.id)}
                        className="px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  ) : clm.render ? (
                    clm.render(row[clm.accessor], row)
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
