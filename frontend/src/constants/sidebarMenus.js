export const adminMenu = [
  { label: "Dashboard", path: "/admin/dashboard", icon: "📊" },

  {
    label: "Company",
    icon: "🏢",
    submenu: [
      { label: "Departments", path: "/admin/company/departments" },
      { label: "Designations", path: "/admin/company/designations" },
    ],
  },

  {
    label: "Employees",
    icon: "👥",
    submenu: [
      { label: "All Employees", path: "/admin/employees" },
      { label: "Add Employee", path: "/admin/employees/add" },
      { label: "Employee Types", path: "/admin/employees/types" },
      { label: "Attendance", path: "/admin/employees/attendance" },
    ],
  },

  {
    label: "Projects",
    icon: "🧩",
    submenu: [
      { label: "All Projects", path: "/admin/projects" },
      { label: "Create Project", path: "/admin/projects/create" },
      { label: "Project Categories", path: "/admin/projects/categories" },
    ],
  },

  {
    label: "Clients",
    icon: "🤝",
    submenu: [
      { label: "All Clients", path: "/admin/clients" },
      { label: "Add Client", path: "/admin/clients/add" },
    ],
  },

  {
    label: "HR & Payroll",
    icon: "📄",
    submenu: [
      { label: "Leave Requests", path: "/admin/hr/leaves" },
      { label: "Salaries", path: "/admin/hr/salaries" },
      { label: "Payslips", path: "/admin/hr/payslips" },
    ],
  },

  {
    label: "Finance",
    icon: "💰",
    submenu: [
      { label: "Invoices", path: "/admin/finance/invoices" },
      { label: "Expenses", path: "/admin/finance/expenses" },
    ],
  },

  {
    label: "Reports",
    icon: "📈",
    submenu: [
      { label: "Project Reports", path: "/admin/reports/projects" },
      { label: "Employee Reports", path: "/admin/reports/employees" },
    ],
  },

  {
    label: "System",
    icon: "⚙️",
    submenu: [
      { label: "Settings", path: "/admin/settings" },
      { label: "Notifications", path: "/admin/notifications" },
      { label: "Roles & Permissions", path: "/admin/roles" },
    ],
  },

  { label: "Logout", path: "/logout", icon: "🚪" },
];


export const hrMenu = [
    {label: "Dashboard", path: "/hr/dashboard", icon: "📊"},
    {label: "Employees", path: "/hr/employees", icon: "📊"},
    {label: "Attendance", path: "/hr/attendance", icon: "📊"},
]

export const projectManagerMenu = [
    {label: "Dashboard",  path: "/project-manager/dashboard"},
    {label: "Projects", submenu: [
        {label: "My Projects", path: "/project-manager/projects/my-projects"},
        {label: "Create Project", path: "/project-manager/projects/create-project"},
        {label: "Team Assignments", path: "/project-manager/projects/team"},
        {label: "Tasks", path: "/project-manager/projects/tasks"},
    ]}
]

export const employeeMenu = [
  { label: "Dashboard", path: "/employee/dashboard", icon: "📊" },

  {
    label: "My Work",
    icon: "🗂️",
    submenu: [
      { label: "Assigned Tasks", path: "/employee/tasks" },
      { label: "Submit Work", path: "/employee/submit" },
      { label: "Project Details", path: "/employee/projects" },
    ],
  },

  {
    label: "Attendance",
    icon: "🕒",
    submenu: [
      { label: "Mark Attendance", path: "/employee/attendance/mark" },
      { label: "View Records", path: "/employee/attendance/records" },
    ],
  },

  {
    label: "Leave Management",
    icon: "📝",
    submenu: [
      { label: "Apply for Leave", path: "/employee/leave/apply" },
      { label: "Leave Status", path: "/employee/leave/status" },
    ],
  },

  {
    label: "Profile & HR",
    icon: "👤",
    submenu: [
      { label: "My Profile", path: "/employee/profile" },
      { label: "Payslip", path: "/employee/payslip" },
    ],
  },

  {
    label: "Communication",
    icon: "💬",
    submenu: [
      { label: "Team Chat", path: "/employee/chat" },
      { label: "Meeting Schedule", path: "/employee/meetings" },
    ],
  },
];


export const clientMenu = [
  { label: "Dashboard", path: "/client/dashboard", icon: "📊" },

  {
    label: "Projects",
    icon: "📁",
    submenu: [
      { label: "Ongoing Projects", path: "/client/projects/ongoing" },
      { label: "Completed Projects", path: "/client/projects/completed" },
      { label: "Milestones", path: "/client/projects/milestones" },
      { label: "Documents", path: "/client/projects/documents" },
    ],
  },

  {
    label: "Support",
    icon: "🛠️",
    submenu: [
      { label: "Raise Ticket", path: "/client/support/new" },
      { label: "My Tickets", path: "/client/support/tickets" },
      { label: "Chat with Support", path: "/client/support/chat" },
    ],
  },

  {
    label: "Invoices",
    icon: "💰",
    submenu: [
      { label: "View Invoices", path: "/client/invoices" },
      { label: "Payments", path: "/client/payments" },
    ],
  },

  {
    label: "Feedback ",
    icon: "🗣️",
    submenu: [
      { label: "Submit Feedback", path: "/client/feedback" },
      { label: "Meeting Schedule", path: "/client/meetings" },
    ],
  },

  { label: "Profile", path: "/client/profile", icon: "👤" },
];
