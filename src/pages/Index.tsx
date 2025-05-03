
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import StatusCard from '@/components/dashboard/StatusCard';
import ProjectSummary from '@/components/dashboard/ProjectSummary';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import ProjectTable from '@/components/dashboard/ProjectTable';
import { mockProjects, getStatusCount } from '@/data/mockData';
import { t } from '@/utils/translations';

const Index = () => {
  const statusCounts = getStatusCount();
  const recentProjects = mockProjects.slice(0, 3);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 animate-fade-in">{t('projectDashboard')}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatusCard 
                title="Completed" 
                count={statusCounts['Done']} 
                type="done" 
                delay={1}
              />
              <StatusCard 
                title="In Progress" 
                count={statusCounts['In Progress']} 
                type="progress" 
                delay={2}
              />
              <StatusCard 
                title="In Review" 
                count={statusCounts['Review']} 
                type="review" 
                delay={3}
              />
              <StatusCard 
                title="Stuck" 
                count={statusCounts['Stuck']} 
                type="stuck" 
                delay={4}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              {recentProjects.map((project, index) => (
                <ProjectSummary 
                  key={project.id}
                  project={project}
                  index={index + 1}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 gap-6 mb-6">
              <PerformanceChart />
            </div>
            
            <div>
              <ProjectTable projects={mockProjects} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
