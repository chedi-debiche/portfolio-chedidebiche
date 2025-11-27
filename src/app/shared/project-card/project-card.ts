import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/projects';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project!: Project;

  currentIndex = 0;

  // ✅ FIX: Accepter Event en paramètre
  next(event?: Event): void {
    event?.stopPropagation();
    if (!this.project.images || this.project.images.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.project.images.length;
  }

  // ✅ FIX: Accepter Event en paramètre
  prev(event?: Event): void {
    event?.stopPropagation();
    if (!this.project.images || this.project.images.length === 0) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.project.images.length) % this.project.images.length;
  }

  // ✅ FIX: Accepter index ET Event
  goTo(index: number, event?: Event): void {
    event?.stopPropagation();
    if (!this.project.images || this.project.images.length === 0) return;
    this.currentIndex = index;
  }

  // ✅ FIX #4: Corriger le type de retour
  get hasImages(): boolean {
    return !!(this.project?.images && this.project.images.length > 0);
  }
}
