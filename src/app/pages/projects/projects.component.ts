import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../core/projects';
import { ProjectCard } from '../../shared/project-card/project-card';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-projects',
  imports: [NgFor, FormsModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
    svc = inject(ProjectsService);

}
