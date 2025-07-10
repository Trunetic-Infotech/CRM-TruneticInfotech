import React from 'react'
import { FiBell } from "react-icons/fi";  
import { FiSettings } from "react-icons/fi";

const AdminDashboard = () => {
  return (
    <div className='p-3 md:p-0'>
      <div className='flex justify-between '>
         <div className='flex flex-col gap-2'>
        <p className='text-5xl font-extrabold '>Welcome Admin!</p>
        <p className='text-xl text-gray-400 pl-2'>Here's whats happening in your organization!</p>
      </div>

      <div>
        <div className='flex gap-5 items-center justify-center'>
          <div>
            <FiBell size={40} />
          </div>
          <div>
        <FiSettings size={40} />

          </div>
        </div>

      </div>  
      </div>
    </div>
  )
}

export default AdminDashboard