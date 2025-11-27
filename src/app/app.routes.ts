import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
export const routes: Routes = [
      // ✅ Route par défaut - redirige vers /home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'home', component : HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'contact', component: ContactComponent},

      // ✅ Route wildcard - capture les URLs invalides
  { path: '**', redirectTo: '/home' }

];
