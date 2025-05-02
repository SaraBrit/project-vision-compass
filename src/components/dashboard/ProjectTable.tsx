
import React from 'react';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from '@/components/ui/table';
import { Project, getStatusColor, getPriorityColor } from '@/data/mockData';
import ProgressBar from './ProgressBar';

interface ProjectTableProps {
  projects: Project[];
}

const ProjectTable: React.FC<ProjectTableProps> = ({ projects }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short',
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <div className="dashboard-card overflow-hidden animate-fade-in animate-delayed" style={{ '--delay': 6 } as React.CSSProperties}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">All Projects</h3>
        <a href="#" className="text-sm text-primary hover:underline">View all</a>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Budget</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">
                  {project.name}
                  <div className="text-xs text-muted-foreground mt-1">
                    {project.tasks.completed}/{project.tasks.total} tasks
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`status-badge ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </TableCell>
                <TableCell>{formatDate(project.dueDate)}</TableCell>
                <TableCell className="w-40">
                  <ProgressBar progress={project.progress} size="sm" showLabel={false} />
                </TableCell>
                <TableCell>
                  <span className={`font-medium ${getPriorityColor(project.priority)}`}>
                    {project.priority}
                  </span>
                </TableCell>
                <TableCell>
                  <div>${project.budget.spent.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">
                    of ${project.budget.allocated.toLocaleString()}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProjectTable;
