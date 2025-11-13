import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Linkedin, Github, FileText, Mail, Phone, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
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

}
