import React from 'react'
import Table from '../../components/Table';


const clientData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@techcorp.com",
    company: "TechCorp Solutions",
    industry: "Technology",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    projects: 3,
    totalValue: 450000,
    rating: 4.8,
    status: "ACTIVE"
  },
  {
    id: 2,
    name: "Lisa Anderson",
    email: "lisa.anderson@financefirst.com",
    company: "FinanceFirst Bank",
    industry: "Finance",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    projects: 2,
    totalValue: 350000,
    rating: 4.9,
    status: "ACTIVE"
  },
  {
    id: 3,
    name: "Robert Wilson",
    email: "robert.wilson@creativestudios.com",
    company: "Creative Studios Inc",
    industry: "Creative",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    projects: 1,
    totalValue: 75000,
    rating: 4.5,
    status: "PROSPECT"
  }
];

const columns = [
  { name: "Client", accessor: "name" },
  { name: "Email", accessor: "email" },
  { name: "Company", accessor: "company" },
  { name: "Industry", accessor: "industry" },
  { name: "Projects", accessor: "projects" },
  { name: "Total Value", accessor: "totalValue" },
  { name: "Rating", accessor: "rating" },
  { name: "Status", accessor: "status" }
];


const Client = () => {
  return (
       <div className="flex flex-col gap-5 w-full">
           <div className="flex flex-col gap-0 md:gap-2 justify-between">
             <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold pl-7 md:pl-0">
               Project Client List!
             </p>
             <p className="text-base sm:text-lg md:text-xl text-gray-500 pl-7 md:pl-0">
               Manage and track project clients.
             </p>
           </div>
           <Table columns={columns} data={clientData} />
    </div>
  )
}

export default Client
