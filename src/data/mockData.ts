
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
  // Construction specific fields
  siteLocation?: string;
  materials?: {
    ordered: number;
    delivered: number;
    used: number;
  };
  safetyIncidents?: number;
  contractor?: string;
  phase?: 'Planning' | 'Foundation' | 'Framing' | 'Exterior' | 'Interior' | 'Finishing';
}

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Commercial Complex',
    description: 'Construction of a 5-story commercial building with underground parking',
    status: 'In Progress',
    progress: 65,
    dueDate: '2025-08-15',
    teamMembers: 25,
    tasks: {
      completed: 26,
      total: 40,
    },
    budget: {
      allocated: 3500000,
      spent: 2275000,
    },
    priority: 'High',
    siteLocation: '123 Main St, Downtown',
    materials: {
      ordered: 85,
      delivered: 70,
      used: 60
    },
    safetyIncidents: 0,
    contractor: 'ABC Construction Co.',
    phase: 'Framing'
  },
  {
    id: '2',
    name: 'Residential Complex',
    description: 'Development of luxury apartment complex with 50 units',
    status: 'Review',
    progress: 85,
    dueDate: '2025-05-30',
    teamMembers: 18,
    tasks: {
      completed: 51,
      total: 60,
    },
    budget: {
      allocated: 2250000,
      spent: 1912500,
    },
    priority: 'Medium',
    siteLocation: '456 Park Ave, Westside',
    materials: {
      ordered: 95,
      delivered: 90,
      used: 85
    },
    safetyIncidents: 1,
    contractor: 'Premier Builders Inc.',
    phase: 'Interior'
  },
  {
    id: '3',
    name: 'Highway Bridge',
    description: 'Construction of a 120m suspension bridge over the river',
    status: 'Done',
    progress: 100,
    dueDate: '2025-04-10',
    teamMembers: 22,
    tasks: {
      completed: 30,
      total: 30,
    },
    budget: {
      allocated: 5800000,
      spent: 5500000,
    },
    priority: 'Medium',
    siteLocation: 'River Crossing, North County',
    materials: {
      ordered: 100,
      delivered: 100,
      used: 100
    },
    safetyIncidents: 0,
    contractor: 'Bridge Masters Ltd.',
    phase: 'Finishing'
  },
  {
    id: '4',
    name: 'School Renovation',
    description: 'Complete renovation of east wing classrooms and gymnasium',
    status: 'Stuck',
    progress: 35,
    dueDate: '2025-07-10',
    teamMembers: 12,
    tasks: {
      completed: 7,
      total: 20,
    },
    budget: {
      allocated: 1200000,
      spent: 420000,
    },
    priority: 'High',
    siteLocation: 'Public School #42, Eastside',
    materials: {
      ordered: 60,
      delivered: 45,
      used: 30
    },
    safetyIncidents: 1,
    contractor: 'Education Builders Co.',
    phase: 'Foundation'
  },
  {
    id: '5',
    name: 'Shopping Mall',
    description: 'Construction of new shopping mall with 30 retail spaces',
    status: 'In Progress',
    progress: 40,
    dueDate: '2025-09-01',
    teamMembers: 30,
    tasks: {
      completed: 12,
      total: 30,
    },
    budget: {
      allocated: 7500000,
      spent: 3000000,
    },
    priority: 'High',
    siteLocation: '789 Commerce Dr, Southside',
    materials: {
      ordered: 70,
      delivered: 60,
      used: 40
    },
    safetyIncidents: 2,
    contractor: 'Retail Development Inc.',
    phase: 'Foundation'
  },
  {
    id: '6',
    name: 'Hospital Wing',
    description: 'Addition of new emergency department wing to existing hospital',
    status: 'Review',
    progress: 90,
    dueDate: '2025-05-20',
    teamMembers: 24,
    tasks: {
      completed: 9,
      total: 10,
    },
    budget: {
      allocated: 8500000,
      spent: 7650000,
    },
    priority: 'Low',
    siteLocation: 'General Hospital, Westside',
    materials: {
      ordered: 95,
      delivered: 95,
      used: 90
    },
    safetyIncidents: 0,
    contractor: 'Medical Facilities Construction LLC',
    phase: 'Interior'
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

export const getPhaseColor = (phase?: string): string => {
  switch(phase) {
    case 'Planning':
      return 'bg-blue-100 text-blue-800';
    case 'Foundation':
      return 'bg-slate-100 text-slate-800';
    case 'Framing':
      return 'bg-amber-100 text-amber-800';
    case 'Exterior':
      return 'bg-emerald-100 text-emerald-800';
    case 'Interior':
      return 'bg-violet-100 text-violet-800';
    case 'Finishing':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
