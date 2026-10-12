import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography } from '@/theme';

import type { Project } from './types';
import { Link } from 'expo-router';

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.label}>PROYECTO</Text>

            <Text accessibilityRole="header" style={styles.title}>
                {project.title}
            </Text>

            <Text style={styles.description}>
                {project.shortDescription}
            </Text>
            <Link
                href={{
                    pathname: '/projects/[slug]',
                    params: { slug: project.slug },
                }}
                style={styles.link}
            >
                Ver proyecto →
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: spacing.lg,
        gap: spacing.md,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
    },

    label: {
        color: colors.accent,
        fontSize: typography.small,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

    title: {
        color: colors.primary,
        fontSize: typography.subtitle,
        fontWeight: '600',
    },

    description: {
        color: colors.textMuted,
        fontSize: typography.body,
        lineHeight: 26,
    },
    link: {
        alignSelf: 'flex-start',
        color: colors.accent,
        fontSize: typography.body,
        fontWeight: '600',
        paddingVertical: spacing.sm,
    },
});