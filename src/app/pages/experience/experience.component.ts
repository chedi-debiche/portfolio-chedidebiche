import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../core/experience-service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor , NgIf],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  svc = inject(ExperienceService);

}
