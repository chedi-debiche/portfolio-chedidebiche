import { Injectable, signal, computed } from '@angular/core';

export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;      // "Apr - Sep 2024"
  location?: string;      // "Paris, France"
  description: string;    // Description courte
  longDescription?: string; // Description longue
  details: string[];      // Puces détaillées
  tech: string[];         // Badges technologies
  achievements?: string[]; // Accomplissements clés
};

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private _items = signal<Experience[]>([
    {
      id: 'exp1',
      company: 'L\'Oréal',
      role: 'Développeur Full-Stack',
      duration: 'Avr - Sep 2024',
      location: 'Paris, France',
      description: 'Conception et développement d\'une plateforme web de gestion logistique.',
      longDescription: 'Application web performante permettant au département logistique de L\'Oréal de gérer efficacement ses documents, partager des fichiers et collaborer en temps réel. Architecture scalable avec authentification JWT et tests unitaires SOLID.',
      details: [
        'Conçu et développé une plateforme web pour le département logistique, facilitant la gestion des documents, le partage de fichiers et la collaboration inter-équipes, selon la méthodologie Scrum',
        'Appliqué les principes SOLID et des design patterns, et rédigé des tests unitaires pour garantir la qualité du code',
        'Réalisé l\'intégration du frontend avec Angular et TypeScript, orchestré les interactions serveur avec Node.js (Express), développé des API REST et assuré la sécurité de l\'échange des données',
        'Géré la persistance des données via MongoDB, mis en place l\'authentification avec JWT, et supervisé le versionnement collaboratif sur Git'
      ],
      tech: ['Angular 17+', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS', 'RxJS', 'Git', 'Jira', 'Scrum'],
      achievements: [
        'Livraison on-time du MVP avec 0 bugs critiques',
        'Adoption par 50+ utilisateurs internes',
        'Architecture scalable et maintenable',
        'Amélioration 40% de la productivité équipe logistique'
      ]
    },

    {
      id: 'exp2',
      company: 'Argovia',
      role: 'Développeur Frontend',
      duration: 'Mai - Sep 2023',
      location: 'Remote',
      description: 'Migration progressive vers Angular 16+ pour améliorer la performance et l\'UX d\'une application métier interne.',
      longDescription: 'Refonte d\'une application métier interne avec migration vers Angular 16+. Création de composants réutilisables, gestion asynchrone avec RxJS, intégration API REST robuste.',
      details: [
        'Participé à la modernisation d\'une application métier interne en migrant progressivement l\'interface utilisateur vers Angular 16+, afin d\'améliorer la performance, la maintenabilité et l\'expérience utilisateur',
        'Développement de composants Angular/TypeScript réutilisables et intégration des API REST de l\'équipe backend avec gestion des erreurs, loaders et typage strict',
        'Utilisation de RxJS pour la gestion asynchrone (requêtes, rafraîchissement, notifications) en appliquant les bonnes pratiques Angular modernes',
        'Collaboration avec l\'équipe backend et participation aux revues de code'
      ],
      tech: ['Angular 16+', 'TypeScript', 'RxJS', 'SCSS', 'CSS3', 'HTML5', 'REST API', 'Git'],
      achievements: [
        'Performance améliorée de 40%',
        'UX significativement améliorée',
        'Code plus maintenable et scalable',
        'Composants réutilisables et testables'
      ]
    },

    {
      id: 'exp3',
      company: 'Spectrum Consulting',
      role: 'Développeur Full-Stack',
      duration: 'Juin - Août 2022',
      location: 'Paris, France',
      description: 'Développement d\'une plateforme intranet avec authentification robuste et gestion des rôles.',
      longDescription: 'Application intranet d\'entreprise permettant une gestion sécurisée des utilisateurs avec contrôle d\'accès par rôles. Intégration complète du frontend Angular avec un backend Java Spring Boot robuste.',
      details: [
        'Développé une application intranet avec un front-end en Angular et un back-end en Java/Spring Boot, offrant une interface utilisateur intuitive et une architecture serveur robuste',
        'Mis en place une authentification robuste avec Spring Security, incluant la gestion fine des rôles et des permissions des utilisateurs',
        'Travaillé en méthodologie Agile au sein d\'une équipe pluridisciplinaire, en utilisant GitLab pour le versionnement et les revues de code, et Jira pour le suivi des tâches et des user stories',
        'Intégration frontend-backend transparente et sécurisée avec gestion des erreurs'
      ],
      tech: ['Java', 'Spring Boot', 'Spring Security', 'Angular 12', 'JavaScript', 'API REST', 'Firebase', 'MySQL', 'GitLab', 'Jira', 'Agile/Scrum'],
      achievements: [
        'Authentification sécurisée multi-rôles',
        'Architecture backend enterprise scalable',
        'Gestion fine des permissions et rôles utilisateurs',
        'Collaboration en équipe Agile réussie'
      ]
    },
    {
  id: 'exp4',
  company: 'Miral Technology',
  role: 'Stagiaire Développeur Web',
  duration: 'Juin - Juil 2021',
  location: 'France',
  description: 'Modernisation d\'un site web avec Symfony et développement d\'un dashboard admin.',
  longDescription: 'Modernisation complète d\'un site web existant avec Symfony, développement d\'un dashboard administrateur intuitif. Intégration fluide entre front-end et back-end avec amélioration du design et des performances.',
  details: [
    'Modernisation d\'un site web avec Symfony et développement d\'un dashboard admin',
    'Intégration fluide entre front-end et back-end, amélioration du design et des performances',
    'Optimisation des interfaces pour une meilleure expérience utilisateur',
    'Collaboration avec l\'équipe de développement Symfony'
  ],
  tech: ['PHP', 'Symfony', 'HTML', 'CSS', 'Bootstrap', 'GitLab'],
  achievements: [
    'Dashboard admin fonctionnel et intuitif',
    'Modernisation complète du site web',
    'Performances améliorées',
    'Design optimisé pour l\'UX'
  ]
}

  ]);

  items = computed(() => this._items());

  getExperience(id: string) {
    return this._items().find(e => e.id === id);
  }
}
