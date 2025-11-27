import { Injectable, signal, computed } from '@angular/core';

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  link?: string;
  repo?: string;
  images?: string[];
  achievements?: string[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  longDescription?: string;
  tech: string[];
  achievements?: string[];
  projects?: string[];
};

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  // ✅ PROJETS PERSONNELS & ACADÉMIQUES
  private _projects = signal<Project[]>([
    {
      id: 'p1',
      title: 'FITMIND – Plateforme de Coaching Sportif',
      description: 'Application MERN complète de gestion de clubs sportifs, coaching et suivi des performances. Projet académique collaboratif en équipe de 6 développeurs.',
      // longDescription: 'FITMIND est une application web complète destinée à la gestion de clubs de sport et à l\'accompagnement des utilisateurs dans leurs objectifs sportifs. Développé en équipe de 6 étudiants, ce site réunit des fonctionnalités avancées autour du coaching, du suivi de performances, de la gestion d\'infrastructures et de la communauté sportive.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API', 'Git/GitHub', 'Agile/Scrum'],
      achievements: [
        'Gestion multi-profils avec authentification JWT (utilisateurs, coachs, managers)',
        'Tableau de bord personnalisé pour suivi de performances',
        'Gestion avancée des coachs, salles et programmes de coaching',
        'Système de publication de blogs et articles sportifs',
        'Catalogue de produits et outils (calculateur IMC, modules santé)',
        'Système centralisé de réclamations et support utilisateurs',
        'Administration avancée avec gestion d\'utilisateurs et statistiques',
        'Collaboration en équipe Agile avec Git, méthodologie Scrum',
        'Architecture modulaire et scalable MERN stack'
      ],
      repo: 'https://github.com/chedi-debiche/fitmind-frontend',
      // link: 'https://fitmind-demo.com', // À adapter si démo live
      images: ['../../../assets/fitmind1.png', '../../../assets/fitmind2.png','../../../assets/fitmind3.png','../../../assets/fitmind4.png','../../../assets/fitmind5.png','../../../assets/fitmind6.png']
    },

    {
      id: 'p2',
      title: 'Portfolio Personnel',
      description: 'Portfolio professionnel Angular 18 moderne avec architecture standalone, Tailwind CSS, dark mode et composants réutilisables.',
      // longDescription: 'Portfolio personnel développé avec Angular 18 et TailwindCSS, permettant de présenter mes projets, mes compétences techniques et mon expérience. L\'application est entièrement responsive, intègre un mode clair/sombre et est déployée sur Firebase Hosting.',
      tech: ['Angular 18', 'TypeScript', 'Tailwind CSS', 'Signals', 'Firebase Hosting', 'Dark Mode', 'Responsive Design'],
      achievements: [
        'Architecture standalone moderne avec Signals',
        'Interface responsive et élégante',
        'Mode clair/sombre avec persistance',
        'Composants réutilisables et maintenables',
        'Intégration dynamique des projets, compétences et expériences',
        'Déploiement Firebase Hosting',
        'Performances optimisées (fast loading)',
        'SEO-friendly'
      ],
      repo: 'https://github.com/chedi-debiche/portfolio-chedidebiche',
      link: 'https://chedi-portfolio-5f0ff.firebaseapp.com',
      images: ['../../../assets/portfolio1.png', '../../../assets/portfolio2.png','../../../assets/portfolio3.png']
    },

    {
      id: 'p3',
      title: 'Gestion des Contrats Étudiants - Kaddem',
      description: 'Backend application Spring Boot de gestion des contrats étudiants avec affectation intelligente par spécialité/niveau et suivi des engagements.',
      // longDescription: 'Système backend de gestion des contrats étudiants dans le cadre du projet Kaddem. L\'application propose une affectation intelligente d\'étudiants en équipes selon spécialité (IA, réseaux, sécurité, cloud) et niveau (junior/senior/expert), avec suivi des engagements et gestion centralisée des données académiques.',
      tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'REST API', 'Postman/Swagger', 'Git'],
      achievements: [
        'Modélisation complète des entités et associations',
        'CRUD complet pour toutes les entités (Étudiant, Département, Université, Contrat)',
        'API REST exposée et testée avec Postman & Swagger',
        'Services avancés : assignation d\'étudiants, affectation à départements',
        'Requêtes complexes : filtrage par département, université, statistiques',
        'Calcul de chiffre d\'affaires et suivi de contrats validés',
        'Architecture modulaire et maintenable',
        'Documentation API complète'
      ],
      repo: 'https://github.com/chedi-debiche/Spring-Kaddem'
    },

    {
      id: 'p4',
      title: 'Task Management App - Angular',
      description: 'Application Angular moderne et intuitive de gestion des tâches quotidiennes avec sélection de profils, ajout/suppression et interface élégante.',
      longDescription: 'Task Management App est une application Angular moderne permettant de gérer facilement ses tâches quotidiennes. Elle a été conçue pour être simple, intuitive et élégante, tout en intégrant les principaux concepts d\'Angular (composants, services, data binding, directives, etc.). Les utilisateurs peuvent sélectionner un profil, ajouter, consulter, terminer et supprimer des tâches.',
      tech: ['Angular 17+', 'TypeScript', 'SCSS/CSS3', 'TailwindCSS', 'Services Angular', 'Data Binding', 'RxJS'],
      achievements: [
        'Sélection d\'utilisateurs avec profils personnalisés',
        'Gestion complète des tâches (CRUD)',
        'Marquage des tâches comme terminées/terminées',
        'Interface colorée et fluide avec thème violet/bleu dégradé',
        'Gestion des données via services Angular',
        'Data binding bidirectionnel efficace',
        'Directives structurelles optimisées (*ngIf, *ngFor)',
        'Thème sombre élégant',
        'Architecture scalable pour futures améliorations'
      ],
      repo: 'https://github.com/chedi-debiche/TODOLIST-APP',
      link: 'http://localhost:4200', // À adapter si démo live
      images: ['../../../assets/todo1.png', '../../../assets/todo2.png']
    }
  ]);

  // ✅ EXPÉRIENCES PROFESSIONNELLES
  private _experiences = signal<Experience[]>([
    {
      id: 'e1',
      company: 'L\'Oréal',
      role: 'Développeur Full-Stack',
      duration: 'Avr - Sep 2024',
      description: 'Conception et développement d\'une plateforme web de gestion logistique pour le département logistique.',
      longDescription: 'Application web performante permettant au département logistique de L\'Oréal de gérer efficacement ses documents, partager des fichiers et collaborer en temps réel. Architecture scalable avec authentification JWT et tests unitaires SOLID.',
      tech: ['Angular 17+', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS', 'RxJS', 'SOLID', 'Scrum'],
      achievements: [
        'Conception et développement d\'une plateforme web complète',
        'Implémentation frontend Angular 17+ avec composants réutilisables',
        'Développement API REST sécurisée (Node.js/Express, MongoDB)',
        'Authentification JWT et gestion des données sensibles',
        'Architecture scalable et maintenable',
        'Tests unitaires avec principes SOLID',
        'Livraison on-time du MVP avec 0 bugs critiques',
        'Adoption par 50+ utilisateurs internes'
      ],
      projects: [
        'Plateforme de gestion logistique avec partage de fichiers',
        'Dashboard temps réel avec notifications',
        'Système d\'authentification multi-rôles'
      ]
    },

    {
      id: 'e2',
      company: 'Argovia',
      role: 'Développeur Frontend',
      duration: 'Mai - Sep 2023',
      description: 'Migration progressive vers Angular 16+ pour améliorer la performance, maintenabilité et expérience utilisateur d\'une application métier interne.',
      longDescription: 'Refonte d\'une application métier interne avec migration vers Angular 16+. Création de composants réutilisables, gestion asynchrone avec RxJS, intégration API REST robuste.',
      tech: ['Angular 16+', 'TypeScript', 'RxJS', 'SCSS', 'HTML5', 'REST API', 'Git'],
      achievements: [
        'Migration progressive vers Angular 16+',
        'Création de composants réutilisables et testables',
        'Gestion asynchrone avancée avec RxJS',
        'Intégration API REST avec gestion d\'erreurs',
        'Performance améliorée de 40%',
        'UX significativement améliorée',
        'Code plus maintenable et scalable'
      ],
      projects: [
        'Refactorisation de la couche présentation',
        'Création de services réutilisables',
        'Optimisation des performances et rendu'
      ]
    },

    {
      id: 'e3',
      company: 'Spectrum Consulting',
      role: 'Développeur Full-Stack',
      duration: 'Juin - Août 2022',
      description: 'Développement d\'une plateforme intranet avec authentification robuste, gestion des rôles et permissions, interface Angular intuitive et backend Spring Boot performant.',
      longDescription: 'Application intranet d\'entreprise permettant une gestion sécurisée des utilisateurs avec contrôle d\'accès par rôles. Intégration complète du frontend Angular avec un backend Java Spring Boot robuste. Travail en équipe Agile avec GitLab et Jira.',
      tech: ['Angular 12', 'Java', 'Spring Boot', 'Spring Security', 'Firebase', 'MySQL', 'REST API', 'GitLab', 'Jira', 'Scrum'],
      achievements: [
        'Développement application intranet complète',
        'Authentification sécurisée multi-rôles avec Spring Security',
        'Architecture backend enterprise scalable',
        'Gestion fine des permissions et rôles utilisateurs',
        'Collaboration en équipe Agile (dailies, sprints, retros)',
        'Revues de code via GitLab',
        'Suivi des tâches et user stories via Jira'
      ],
      projects: [
        'Module d\'authentification et autorisation',
        'Tableau de bord utilisateurs',
        'Gestion des permissions par rôles'
      ]
    }
  ]);

  search = signal('');
  projects = computed(() => this._projects());
  experiences = computed(() => this._experiences());
  
  filtered = computed(() => {
    const q = this.search().toLowerCase().trim();
    if (!q) return this._projects();
    return this._projects().filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.join(' ').toLowerCase().includes(q)
    );
  });

  filteredExperiences = computed(() => {
    const q = this.search().toLowerCase().trim();
    if (!q) return this._experiences();
    return this._experiences().filter(e =>
      e.company.toLowerCase().includes(q) ||
      e.role.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.tech.join(' ').toLowerCase().includes(q)
    );
  });

  getProject(id: string) {
    return this._projects().find(p => p.id === id);
  }

  getExperience(id: string) {
    return this._experiences().find(e => e.id === id);
  }
}
