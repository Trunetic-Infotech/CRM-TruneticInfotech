export const adminMenu = [
  { label: "Dashboard", path: "/admin/dashboard", icon: "📊" },
  { label: "Projects", path: "/admin/projects", icon: "🧩" },
  {
    label: "HR Management",
    icon: "🧑‍💼",
    submenu: [
      { label: "Employees", path: "/admin/employees" },
      { label: "Attendance", path: "/admin/attendance" },
    ],
  },
  { label: "Clients", path: "/admin/clients", icon: "🏢" },
];

export const hrMenu = [
    {label: "Dashboard", path: "/hr/dashboard", icon: "📊"},
    {label: "Recruitment", path: "/hr/recruitment", icon: "📝",
      submenu: [
        { label: "We are Requirements", path: "/hr/recruitment/job-openings" },
        { label: "Applications", path: "/hr/recruitment/applications" },
        { label: "Interview Schedule", path: "/hr/recruitment/interviews" },
      ]

    },
    {label: "Employees", path: "/hr/employees", icon: "📊",
      submenu: [
      { label: "Employee Onboarding", path: "/hr/onboarding" },
      { label: "Employees List", path: "/hr/employee/details" },
      { label: "Employee Performance", path: "/hr/performance" },
      { label: "Employee Training", path: "/hr/training" }
    ]},
    {label: "Attendance", path: "/hr/attendance", icon: "📊",
      submenu: [
        { label: "Mark Attendance", path: "/hr/attendance/mark" },
        { label: "Attendance Records", path: "/hr/attendance/records" },
 
      ]},
    {label: "Leave Management", path: "/hr/leave", icon: "📊",
      submenu: [
        { label: "Apply for Leave", path: "/hr/leave/apply" },
        { label: "Leave Status", path: "/hr/leave/status" },
        // { label: "Leave Policies", path: "/hr/leave/policies" }
      ]
    },
    {label: "Payroll", path: "/hr/payroll", icon: "💰",
      submenu: [
        { label: "Salary Structure", path: "/hr/payroll/salary-structure" },
        { label: "Payslips", path: "/hr/payroll/payslips" },
        // { label: "Tax Management", path: "/hr/payroll/tax-management" }
      ]
    },
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
