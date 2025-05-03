
import React from 'react';
import { CalendarDays, Users, MapPin, HardDrive, Shield } from 'lucide-react';
import { Project, getStatusColor, getPriorityColor, getPhaseColor } from '@/data/mockData';
import ProgressBar from './ProgressBar';
import { t } from '@/utils/translations';

interface ProjectSummaryProps {
  project: Project;
  index: number;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ project, index }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', { 
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
          <span>{project.teamMembers} {t('members')}</span>
        </div>
      </div>

      {/* Construction specific details */}
      <div className="mt-4 flex items-center text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 mr-1" />
        <span className="line-clamp-1">{project.siteLocation}</span>
      </div>
      
      {project.phase && (
        <div className="mt-2">
          <span className={`text-xs px-2 py-1 rounded-full ${getPhaseColor(project.phase)}`}>
            {t('phase')}: {project.phase}
          </span>
        </div>
      )}
      
      <div className="mt-4 flex justify-between items-center">
        <div>
          <span className="text-xs text-muted-foreground">{t('tasks')}</span>
          <div className="text-sm font-medium">
            {project.tasks.completed}/{project.tasks.total}
          </div>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{t('budget')}</span>
          <div className="text-sm font-medium">
            €{project.budget.spent.toLocaleString('fr-FR')} / €{project.budget.allocated.toLocaleString('fr-FR')}
          </div>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{t('priority')}</span>
          <div className={`text-sm font-medium ${getPriorityColor(project.priority)}`}>
            {t(project.priority.toLowerCase())}
          </div>
        </div>
      </div>

      {project.materials && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground mb-2">{t('materials')}</div>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div>
              <div className="text-xs text-muted-foreground">{t('ordered')}</div>
              <div className="font-medium">{project.materials.ordered}%</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{t('delivered')}</div>
              <div className="font-medium">{project.materials.delivered}%</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{t('used')}</div>
              <div className="font-medium">{project.materials.used}%</div>
            </div>
          </div>
        </div>
      )}

      {project.contractor && (
        <div className="mt-4 text-xs">
          <span className="text-muted-foreground">{t('contractor')}:</span>
          <span className="font-medium ml-1">{project.contractor}</span>
        </div>
      )}
    </div>
  );
};

export default ProjectSummary;
