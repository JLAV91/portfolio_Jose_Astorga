import type { Experience } from './types';

export const experiences: Experience[] = [
    {
        id: 'imagemaker',
        role: 'Backend Developer — Java / Spring Boot',
        company: 'ImageMaker · Cliente: Banco de Chile',
        period: 'Julio 2026 — Actualidad',
        highlights: [
            'Desarrollo y mantenimiento de servicios backend con Java 21 y Spring Boot.',
            'Participación en la migración tecnológica de Java 11 a Java 21.',
            'Refactorización de código aplicando Clean Code y principios SOLID para mejorar su mantenibilidad.',
            'Desarrollo de APIs REST e integración con componentes internos del sistema.',
            'Desarrollo de pruebas unitarias con JUnit para verificar la calidad y estabilidad del software.',
        ],
        technologies: [
            'Java 21',
            'Spring Boot',
            'JUnit',
            'APIs REST',
        ],
    },
    {
        id: 'consorcio',
        role: 'Full Stack Developer',
        company: 'Consorcio',
        period: 'Abril 2024 — Febrero 2026',
        highlights: [
            'Desarrollo de interfaces web con Vue.js y servicios backend con NestJS y Node.js.',
            'Construcción y optimización de APIs REST.',
            'Monitoreo de aplicaciones mediante New Relic.',
            'Control de calidad del código con SonarQube.',
            'Despliegue de aplicaciones utilizando Docker y Rancher.',
        ],
        technologies: [
            'Vue.js',
            'NestJS',
            'Node.js',
            'Docker',
            'Rancher',
            'New Relic',
            'SonarQube',
        ],
    },
];