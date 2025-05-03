
import React from 'react';
import { 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  PlayCircle 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { t } from '@/utils/translations';

interface StatusCardProps {
  title: string;
  count: number;
  type: 'done' | 'review' | 'progress' | 'stuck';
  delay: number;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, count, type, delay }) => {
  const getIcon = () => {
    switch(type) {
      case 'done':
        return <CheckCircle className="h-5 w-5 text-status-done" />;
      case 'review':
        return <Clock className="h-5 w-5 text-status-review" />;
      case 'progress':
        return <PlayCircle className="h-5 w-5 text-status-progress" />;
      case 'stuck':
        return <AlertCircle className="h-5 w-5 text-status-stuck" />;
      default:
        return null;
    }
  };

  const getBg = () => {
    switch(type) {
      case 'done':
        return 'bg-status-done/10';
      case 'review':
        return 'bg-status-review/10';
      case 'progress':
        return 'bg-status-progress/10';
      case 'stuck':
        return 'bg-status-stuck/10';
      default:
        return 'bg-gray-100';
    }
  };

  // Translate the title
  const translatedTitle = (() => {
    switch(title) {
      case 'Completed': return t('completed');
      case 'In Progress': return t('inProgress');
      case 'In Review': return t('inReview');
      case 'Stuck': return t('stuck');
      default: return title;
    }
  })();

  return (
    <div 
      className={cn(
        "dashboard-card flex items-center animate-fade-in animate-delayed", 
        getBg()
      )}
      style={{ '--delay': delay } as React.CSSProperties}
    >
      <div className="mr-4">
        {getIcon()}
      </div>
      <div>
        <h3 className="text-sm font-medium text-muted-foreground">{translatedTitle}</h3>
        <p className="text-2xl font-semibold">{count}</p>
      </div>
    </div>
  );
};

export default StatusCard;
