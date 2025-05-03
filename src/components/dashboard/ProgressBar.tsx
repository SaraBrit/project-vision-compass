
import React from 'react';
import { cn } from '@/lib/utils';
import { t } from '@/utils/translations';

interface ProgressBarProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  size = 'md', 
  showLabel = true 
}) => {
  const getColorClass = () => {
    if (progress >= 100) return 'bg-status-done';
    if (progress >= 70) return 'bg-status-progress';
    if (progress >= 40) return 'bg-status-review';
    return 'bg-status-stuck';
  };

  const getHeightClass = () => {
    switch (size) {
      case 'sm': return 'h-1.5';
      case 'lg': return 'h-3';
      default: return 'h-2';
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        {showLabel && (
          <span className="text-xs font-medium text-muted-foreground">
            {t('progress')}
          </span>
        )}
        <span className="text-xs font-medium text-muted-foreground">
          {progress}%
        </span>
      </div>
      <div className={cn("w-full bg-muted rounded-full", getHeightClass())}>
        <div
          className={cn("rounded-full transition-all duration-500", getHeightClass(), getColorClass())}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
