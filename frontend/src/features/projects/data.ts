import type { Project } from './types';

export const projects: Project[] = [
    {
        id: 1,
        slug: 'fintrack',
        title: 'FinTrack',
        shortDescription:
            'Aplicación para gestionar finanzas personales, deudas y presupuestos.',
        description:
            'FinTrack es un proyecto orientado a la gestión de finanzas personales. ' +
            'Su objetivo es facilitar la organización de deudas, gastos y presupuestos ' +
            'desde una experiencia accesible en distintas plataformas.',
    },
    {
        id: 2,
        slug: 'portfolio-jose-astorga',
        title: 'Portfolio José Astorga',
        shortDescription:
            'Portfolio profesional desarrollado con React Native, Expo y Spring Boot.',
        description:
            'Este portafolio reúne mi presentación profesional y mis proyectos de software. ' +
            'El frontend se construye con React Native, Expo y TypeScript, organizando ' +
            'la interfaz en componentes reutilizables y funcionalidades. ' +
            'El backend utiliza Java, Spring Boot y PostgreSQL.',
    },
];