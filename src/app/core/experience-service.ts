import { Injectable, signal, computed } from '@angular/core';

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;      // "Oct 2024 – Juin 2025"
  location?: string;   // "Île-de-France (FR)"
  details: string[];   // puces
  tech: string[];      // badges
};

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private _items = signal<Experience[]>([
    {
      id: 'exp3',
      company: 'Schneider Electric',
      role: 'Data / Platform Engineer (CDD)',
      period: 'Oct 2024 – Juin 2025',
      location: 'Île-de-France',
      details: [
        'Pipelines de logs (Elastic Stack), dashboards Kibana',
        'Structuration ECS, alerting',
        'Maintenance Linux & automatisation'
      ],
      tech: ['Elasticsearch','Kibana','Logstash','Linux']
    },
    {
      id: 'exp2',
      company: 'L’Oréal (Logistique)',
      role: 'Consultant O365 / Power Platform',
      period: 'Avril 2024 – Sept 2024',
      location: 'Rambouillet',
      details: [
        'SharePoint Online, Teams, Lists',
        'Flows Power Automate, intégrations Azure AD',
        'Formation utilisateurs, doc technique'
      ],
      tech: ['SharePoint','Power Automate','Azure AD','Teams']
    },
    {
      id: 'exp1',
      company: 'Spectrum 365',
      role: 'Dev Web (MERN) – Stage',
      period: 'Mai 2023 – Sept 2023',
      location: 'Remote',
      details: [
        'Portail interne MERN (auth JWT, rôles)',
        'APIs Node/Express, UI React',
        'Pratiques Git & CI basiques'
      ],
      tech: ['Node.js','Express','MongoDB','React']
    }
  ]);

  items = computed(() => this._items());
}
