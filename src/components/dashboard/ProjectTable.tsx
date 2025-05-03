
import React from 'react';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from '@/components/ui/table';
import { Project, getStatusColor, getPriorityColor, getPhaseColor } from '@/data/mockData';
import ProgressBar from './ProgressBar';
import { t } from '@/utils/translations';
import { MapPin, Shield } from 'lucide-react';

interface ProjectTableProps {
  projects: Project[];
}

const ProjectTable: React.FC<ProjectTableProps> = ({ projects }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', { 
      month: 'short',
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <div className="dashboard-card overflow-hidden animate-fade-in animate-delayed" style={{ '--delay': 6 } as React.CSSProperties}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{t('allProjects')}</h3>
        <a href="#" className="text-sm text-primary hover:underline">{t('viewAll')}</a>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('name')}</TableHead>
              <TableHead>{t('status')}</TableHead>
              <TableHead>{t('dueDate')}</TableHead>
              <TableHead>{t('progress')}</TableHead>
              <TableHead>{t('priority')}</TableHead>
              <TableHead>{t('phase')}</TableHead>
              <TableHead>{t('budget')}</TableHead>
              <TableHead>{t('site')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">
                  {project.name}
                  <div className="text-xs text-muted-foreground mt-1">
                    {project.tasks.completed}/{project.tasks.total} {t('tasks').toLowerCase()}
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
                    {t(project.priority.toLowerCase())}
                  </span>
                </TableCell>
                <TableCell>
                  {project.phase && (
                    <span className={`text-xs px-2 py-1 rounded-full ${getPhaseColor(project.phase)}`}>
                      {project.phase}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <div>€{project.budget.spent.toLocaleString('fr-FR')}</div>
                  <div className="text-xs text-muted-foreground">
                    / €{project.budget.allocated.toLocaleString('fr-FR')}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span className="truncate max-w-[100px]" title={project.siteLocation}>
                      {project.siteLocation}
                    </span>
                  </div>
                  {project.safetyIncidents !== undefined && (
                    <div className="flex items-center text-xs mt-1">
                      <Shield className={`h-3 w-3 mr-1 ${project.safetyIncidents > 0 ? 'text-status-stuck' : 'text-status-done'}`} />
                      <span>{t('safety')}: {project.safetyIncidents}</span>
                    </div>
                  )}
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
