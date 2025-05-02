
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ListTodo, 
  Calendar, 
  BarChart, 
  Settings, 
  PlusSquare, 
  Users, 
  ArrowLeft, 
  ArrowRight
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
  active?: boolean;
  collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, active = false, collapsed }) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start mb-1 relative",
        collapsed ? "px-2" : "px-4",
        active ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon className="h-5 w-5 mr-2" />
      {!collapsed && <span>{text}</span>}
      {active && <span className="absolute left-0 top-1/4 h-1/2 w-0.5 bg-primary rounded-r-sm" />}
    </Button>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn(
      "border-r border-border bg-white flex flex-col h-screen",
      collapsed ? "w-16" : "w-60"
    )}>
      <div className="p-4 flex-1">
        <div className="flex items-center justify-between mb-6">
          {!collapsed && <span className="font-semibold text-lg">Projects</span>}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="ml-auto">
            {collapsed ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
          </Button>
        </div>

        <div className="space-y-1 mb-8">
          <SidebarItem icon={LayoutDashboard} text="Dashboard" active collapsed={collapsed} />
          <SidebarItem icon={ListTodo} text="Projects" collapsed={collapsed} />
          <SidebarItem icon={Calendar} text="Schedule" collapsed={collapsed} />
          <SidebarItem icon={BarChart} text="Analytics" collapsed={collapsed} />
          <SidebarItem icon={Users} text="Team" collapsed={collapsed} />
        </div>

        <div className="mt-auto pt-4">
          <Button
            variant="outline"
            className={cn(
              "w-full flex items-center gap-2",
              collapsed ? "justify-center" : "justify-start"
            )}
          >
            <PlusSquare className="h-4 w-4" />
            {!collapsed && <span>New Project</span>}
          </Button>
        </div>
      </div>
      
      <div className="border-t border-border p-4">
        <SidebarItem icon={Settings} text="Settings" collapsed={collapsed} />
      </div>
    </aside>
  );
};

export default Sidebar;
