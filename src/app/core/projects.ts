import { Injectable, signal, computed } from '@angular/core';

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  image?: string;
};

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private _projects = signal<Project[]>([
    { id:'p1', title:'Job Portal', description:'Plateforme offres/candidats (MERN + JWT + rôles).', tech:['React','Node','MongoDB'], repo:'https://github.com/...',link:'https://...'} ,
    { id:'p2', title:'Candidate Manager', description:'.NET 9 + Angular (EF Core, Auth, CRUD).', tech:['Angular','.NET','PostgreSQL'] },
    { id:'p3', title:'Dashboard RH', description:'Power BI – KPIs: effectifs, absences, formations.', tech:['Power BI','DAX'] },
    { id:'p4', title:'Dashboard RH', description:'Power BI – KPIs: effectifs, absences, formations.', tech:['Power BI','DAX'] },

  ]);

  search = signal('');
  projects = computed(() => this._projects());
  filtered = computed(() => {
    const q = this.search().toLowerCase().trim();
    if (!q) return this._projects();
    return this._projects().filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.join(' ').toLowerCase().includes(q)
    );
  });
}
