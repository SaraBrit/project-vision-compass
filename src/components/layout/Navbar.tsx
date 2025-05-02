
import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-2">
          <div className="text-xl font-semibold text-primary">Vision<span className="text-accent">Compass</span></div>
        </div>
        
        <div className="flex-1 max-w-xl px-8">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for projects, tasks, or team members..."
              className="pl-8 bg-muted/50 border-none"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-status-stuck"></span>
          </Button>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
