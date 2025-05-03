
interface Translation {
  [key: string]: {
    en: string;
    fr: string;
  }
}

export const translations: Translation = {
  // Dashboard
  "projectDashboard": {
    en: "Project Dashboard",
    fr: "Tableau de Bord du Projet"
  },
  "completed": {
    en: "Completed",
    fr: "Terminé"
  },
  "inProgress": {
    en: "In Progress",
    fr: "En Cours"
  },
  "inReview": {
    en: "In Review",
    fr: "En Révision"
  },
  "stuck": {
    en: "Stuck",
    fr: "Bloqué"
  },
  
  // Project details
  "progress": {
    en: "Progress",
    fr: "Progrès"
  },
  "dueDate": {
    en: "Due Date",
    fr: "Date d'échéance"
  },
  "budget": {
    en: "Budget",
    fr: "Budget"
  },
  "tasks": {
    en: "Tasks",
    fr: "Tâches"
  },
  "members": {
    en: "members",
    fr: "membres"
  },
  "priority": {
    en: "Priority",
    fr: "Priorité"
  },
  "high": {
    en: "High",
    fr: "Élevée"
  },
  "medium": {
    en: "Medium",
    fr: "Moyenne"
  },
  "low": {
    en: "Low",
    fr: "Faible"
  },
  
  // Construction specific
  "materials": {
    en: "Materials",
    fr: "Matériaux"
  },
  "ordered": {
    en: "Ordered",
    fr: "Commandé"
  },
  "delivered": {
    en: "Delivered",
    fr: "Livré"
  },
  "used": {
    en: "Used",
    fr: "Utilisé"
  },
  "site": {
    en: "Site",
    fr: "Chantier"
  },
  "safety": {
    en: "Safety",
    fr: "Sécurité"
  },
  "contractor": {
    en: "Contractor",
    fr: "Entrepreneur"
  },
  "inspector": {
    en: "Inspector",
    fr: "Inspecteur"
  },
  "phase": {
    en: "Phase",
    fr: "Phase"
  },
  "allProjects": {
    en: "All Projects",
    fr: "Tous les Projets"
  },
  "viewAll": {
    en: "View all",
    fr: "Voir tout"
  },
  "name": {
    en: "Name",
    fr: "Nom"
  },
  "status": {
    en: "Status",
    fr: "Statut"
  },
  "projects": {
    en: "Projects",
    fr: "Projets"
  }
};

// Current language setting - can be extended to be user-configurable
let currentLanguage: 'en' | 'fr' = 'en';

export const setLanguage = (lang: 'en' | 'fr') => {
  currentLanguage = lang;
};

export const t = (key: string): string => {
  if (translations[key]) {
    return translations[key][currentLanguage];
  }
  return key;
};
