import { useLocalSearchParams } from 'expo-router';

import { projects } from '@/features/projects/data';
import { ProjectDetails } from '@/features/projects/ProjectDetails';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectDetailsScreen() {
    const { slug } = useLocalSearchParams<{ slug: string }>();

    const project = projects.find(
        (item) => item.slug === slug,
    );

    return <ProjectDetails project={project} />;
}