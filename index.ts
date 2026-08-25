export type EventCategory = 'all' | 'technical' | 'non-technical';

export interface SymposiumEvent {
  id: string;
  title: string;
  category: 'technical' | 'non-technical';
  tagline: string;
  description: string;
  teamSize: string;
  maxTeamSize: number;
  timing: string;
  venue: string;
  prize: string;
  icon: string;
  rules: string[];
  coordinators: string;
  googleFormUrl?: string; // Optional per-event override if provided, defaults to REGISTRATION_FORM_URL
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: string;
  isGold?: boolean;
}
