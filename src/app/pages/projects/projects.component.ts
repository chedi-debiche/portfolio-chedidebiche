import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ À AJOUTER
import { FormsModule } from '@angular/forms';
import { ProjectsService } from '../../core/projects';
import { ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ProjectCard], // ✅ Ajouter CommonModule
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  svc = inject(ProjectsService);

  // ✅ Ajouter cette méthode
  viewProject(id: string) {
    console.log('Viewing project:', id);
    // Vous pouvez l'utiliser pour naviguer plus tard si vous voulez
    // this.router.navigate(['/projects', id]);
  }
}
