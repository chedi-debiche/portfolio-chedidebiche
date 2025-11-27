import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../core/experience-service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  svc = inject(ExperienceService);
  expandedId: string | null = null;

  toggleExpanded(id: string) {
    this.expandedId = this.expandedId === id ? null : id;
  }
}
