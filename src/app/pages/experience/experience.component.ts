import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../core/experience-service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  svc = inject(ExperienceService);

}
