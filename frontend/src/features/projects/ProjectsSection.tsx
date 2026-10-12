import {
    StyleSheet,
    useWindowDimensions,
    View,
} from 'react-native';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { spacing } from '@/theme';

import { projects } from './data';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
    const { width } = useWindowDimensions();
    const hasTwoColumns = width >= 768;

    const itemStyle = hasTwoColumns
        ? styles.halfWidth
        : styles.fullWidth;

    return (
        <SectionContainer>
            <SectionTitle number="02" title="Proyectos destacados" />

            <View style={styles.grid}>
                {projects.map((project) => (
                    <View key={project.id} style={itemStyle}>
                        <ProjectCard project={project} />
                    </View>
                ))}
            </View>
        </SectionContainer>
    );
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: spacing.lg,
    },

    fullWidth: {
        width: '100%',
    },

    halfWidth: {
        width: '48%',
    },
});