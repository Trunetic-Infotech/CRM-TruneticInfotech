import React from 'react'
import AddButton from '../../../components/AddButton'
import { Trash2, Pencil } from 'lucide-react';

const EmployeeTypes = () => {
    const typesData = [
        {label: "Full Time", description: "Regular full-time employees  "},
        {label: "Part Time", description: "Part-time employees"},
        {label: "Contract", description: "Contract based employees"},
        {label: "Intern", description: "Internship programs participants"},
        {label: "Consultant", description: "External Consultants"},
    ]
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex justify-between'>
            <div>
                <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">Employee Types</p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">Manage different types of employee classifications</p>
            </div>
            <div>
                <AddButton data="Add Type"/>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            {typesData.map((types, index)=> (
                <div key={index} className='flex bg-white rounded-lg shadow-md p-5 relative' >
                    <div className='flex flex-col gap-2'> 
                        <p className='text-xl font-bold'>{types.label}</p>
                    <p className=' text-gray-400'>{types.description}</p>
                    </div>
                    <div className='flex absolute right-5 gap-5'>
<Pencil className="w-5 h-5 text-blue-500 cursor-pointer hover:text-blue-700" />
                        <Trash2 className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-700" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EmployeeTypes