import { NgIf, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [NgIf, NgFor],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input () title!: string;
  @Input () description!: string;
  @Input () tech!: string[]
  @Input () link?: string;
  @Input () repo?: string;
  @Input () image?: string;
  
}
