import { Component, signal, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent {
  theme = signal<'light'|'dark'>(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
  menu = signal(false); // 👈 for mobile

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('dark', this.theme() === 'dark');
    });
  }

  toggleTheme() { this.theme.update(t => t === 'dark' ? 'light' : 'dark'); }
  toggleMenu()  { this.menu.update(v => !v); }
  closeMenu()   { this.menu.set(false); }
  menuOpen()    { return this.menu(); }
}
