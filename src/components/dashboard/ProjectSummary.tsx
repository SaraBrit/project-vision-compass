
import React from 'react';
import { CalendarDays, Users } from 'lucide-react';
import { Project, getStatusColor, getPriorityColor } from '@/data/mockData';
import ProgressBar from './ProgressBar';

interface ProjectSummaryProps {
  project: Project;
  index: number;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ project, index }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short',
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <div className="dashboard-card animate-fade-in animate-delayed" style={{ '--delay': index } as React.CSSProperties}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg">{project.name}</h3>
        <span className={`status-badge ${getStatusColor(project.status)}`}>{project.status}</span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
      
      <ProgressBar progress={project.progress} />
      
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 mr-1" />
          <span>{formatDate(project.dueDate)}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-1" />
          <span>{project.teamMembers} members</span>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div>
          <span className="text-xs text-muted-foreground">Tasks</span>
          <div className="text-sm font-medium">
            {project.tasks.completed}/{project.tasks.total}
          </div>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">Budget</span>
          <div className="text-sm font-medium">
            ${project.budget.spent.toLocaleString()} / ${project.budget.allocated.toLocaleString()}
          </div>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">Priority</span>
          <div className={`text-sm font-medium ${getPriorityColor(project.priority)}`}>
            {project.priority}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
