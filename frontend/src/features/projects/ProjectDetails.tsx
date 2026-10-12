import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { colors, spacing, typography } from '@/theme';

import type { Project } from './types';

type ProjectDetailsProps = {
    project: Project | undefined;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <ScrollView style={styles.page}>
            <SectionContainer>
                <Link href="/" style={styles.backLink}>
                    ← Volver al portafolio
                </Link>

                <Text accessibilityRole="header" style={styles.title}>
                    {project?.title ?? 'Proyecto no encontrado'}
                </Text>

                <Text style={styles.description}>
                    {project?.description ??
                        'No encontramos un proyecto con esta dirección.'}
                </Text>
            </SectionContainer>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.background,
    },

    backLink: {
        alignSelf: 'flex-start',
        color: colors.accent,
        fontSize: typography.body,
        paddingVertical: spacing.sm,
        marginBottom: spacing.lg,
    },

    title: {
        color: colors.primary,
        fontSize: typography.title,
        fontWeight: 'bold',
        marginBottom: spacing.lg,
    },

    description: {
        color: colors.textMuted,
        fontSize: typography.body,
        lineHeight: 26,
    },
});