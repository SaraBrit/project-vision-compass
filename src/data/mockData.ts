
export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'Done' | 'In Progress' | 'Review' | 'Stuck';
  progress: number;
  dueDate: string;
  teamMembers: number;
  tasks: {
    completed: number;
    total: number;
  };
  budget: {
    allocated: number;
    spent: number;
  };
  priority: 'Low' | 'Medium' | 'High';
}

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Completely overhaul the company website with new design',
    status: 'In Progress',
    progress: 65,
    dueDate: '2025-06-15',
    teamMembers: 4,
    tasks: {
      completed: 26,
      total: 40,
    },
    budget: {
      allocated: 12000,
      spent: 7800,
    },
    priority: 'High',
  },
  {
    id: '2',
    name: 'Mobile Application',
    description: 'Develop native mobile application for iOS and Android',
    status: 'Review',
    progress: 85,
    dueDate: '2025-05-30',
    teamMembers: 6,
    tasks: {
      completed: 51,
      total: 60,
    },
    budget: {
      allocated: 25000,
      spent: 22500,
    },
    priority: 'Medium',
  },
  {
    id: '3',
    name: 'Marketing Campaign',
    description: 'Launch Q2 marketing campaign across multiple channels',
    status: 'Done',
    progress: 100,
    dueDate: '2025-04-10',
    teamMembers: 3,
    tasks: {
      completed: 30,
      total: 30,
    },
    budget: {
      allocated: 8000,
      spent: 7500,
    },
    priority: 'Medium',
  },
  {
    id: '4',
    name: 'Data Migration',
    description: 'Migrate database to new cloud infrastructure',
    status: 'Stuck',
    progress: 35,
    dueDate: '2025-05-10',
    teamMembers: 2,
    tasks: {
      completed: 7,
      total: 20,
    },
    budget: {
      allocated: 6000,
      spent: 2000,
    },
    priority: 'High',
  },
  {
    id: '5',
    name: 'Product Launch',
    description: 'Launch new product features and integration',
    status: 'In Progress',
    progress: 40,
    dueDate: '2025-07-01',
    teamMembers: 5,
    tasks: {
      completed: 12,
      total: 30,
    },
    budget: {
      allocated: 15000,
      spent: 6000,
    },
    priority: 'High',
  },
  {
    id: '6',
    name: 'Team Training',
    description: 'Conduct training workshops for team',
    status: 'Review',
    progress: 90,
    dueDate: '2025-05-20',
    teamMembers: 8,
    tasks: {
      completed: 9,
      total: 10,
    },
    budget: {
      allocated: 5000,
      spent: 4500,
    },
    priority: 'Low',
  },
];

export const getStatusCount = () => {
  const statusCounts = {
    'Done': 0,
    'In Progress': 0,
    'Review': 0,
    'Stuck': 0
  };

  mockProjects.forEach(project => {
    statusCounts[project.status]++;
  });

  return statusCounts;
};

export const getMonthlyProgress = () => {
  return [
    { name: 'Jan', completed: 10, total: 15 },
    { name: 'Feb', completed: 18, total: 20 },
    { name: 'Mar', completed: 25, total: 30 },
    { name: 'Apr', completed: 22, total: 25 },
    { name: 'May', completed: 28, total: 35 }
  ];
};

export const getStatusColor = (status: string): string => {
  switch(status) {
    case 'Done':
      return 'bg-status-done text-white';
    case 'In Progress':
      return 'bg-status-progress text-white';
    case 'Review':
      return 'bg-status-review text-white';
    case 'Stuck':
      return 'bg-status-stuck text-white';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

export const getPriorityColor = (priority: string): string => {
  switch(priority) {
    case 'High':
      return 'text-status-stuck';
    case 'Medium':
      return 'text-status-review';
    case 'Low':
      return 'text-status-done';
    default:
      return 'text-gray-600';
  }
};
