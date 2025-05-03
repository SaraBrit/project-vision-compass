
import React, { useState } from 'react';
import { Search, Bell, User, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { t, setLanguage } from '@/utils/translations';

const Navbar = () => {
  const [language, setCurrentLanguage] = useState<'en' | 'fr'>('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    // Force re-render of the entire app
    window.location.reload();
  };

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
              placeholder="Rechercher des projets, tâches, ou membres d'équipe..."
              className="pl-8 bg-muted/50 border-none"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="text-xs"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </Button>

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
