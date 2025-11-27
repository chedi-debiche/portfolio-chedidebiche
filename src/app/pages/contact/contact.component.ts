import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Linkedin, Github, FileText, Mail, Phone, MapPin, ExternalLink } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  Linkedin = Linkedin;
  Github = Github;
  FileText = FileText;
  Mail = Mail;
  Phone = Phone;
  MapPin = MapPin;
  ExternalLink = ExternalLink;

  contactInfo = [
    {
      icon: 'Phone',
      label: 'Téléphone',
      value: '06 51 41 60 73',
      href: 'tel:+33651416073'
    },
    {
      icon: 'Mail',
      label: 'Email',
      value: 'ch.debiche@gmail.com',
      href: 'mailto:ch.debiche@gmail.com'
    },
    {
      icon: 'MapPin',
      label: 'Localisation',
      value: 'Île-de-France, France',
      href: null
    }
  ];

  links = [
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chedi-debiche',
      description: 'Professionnel & réseau'
    },
    {
      icon: 'Github',
      label: 'GitHub',
      href: 'https://github.com/chedi-debiche',
      description: 'Code & projets'
    },
    {
      icon: 'FileText',
      label: 'Télécharger mon CV',
      href: 'assets/cv_chedi.pdf',
      description: 'PDF complet',
      download: true
    }
  ];
}
