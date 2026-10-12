import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { TechnologyTags } from '@/components/ui/TechnologyTags';
import { colors, fonts, spacing } from '@/theme';

import type { Project } from './types';

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.heading}>
                <Text style={styles.label}>
                    PROYECTO
                </Text>

                <Text style={styles.symbol}>
                    {'</>'}
                </Text>
            </View>

            <Text
                accessibilityRole="header"
                style={styles.title}
            >
                {project.title}
            </Text>

            <Text style={styles.description}>
                {project.shortDescription}
            </Text>

            {!!project.technologies?.length && (
                <TechnologyTags technologies={project.technologies} />
            )}

            <View style={styles.footer}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: spacing.lg,
        gap: spacing.md,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: 'rgba(68, 71, 73, 0.5)',
        borderRadius: 8,
    },

    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing.md,
    },

    label: {
        color: colors.accent,
        fontFamily: fonts.code,
        fontSize: 11,
        letterSpacing: 1,
    },

    symbol: {
        color: colors.accent,
        fontFamily: fonts.code,
        fontSize: 20,
    },

    title: {
        color: colors.primary,
        fontFamily: fonts.heading,
        fontSize: 24,
        lineHeight: 32,
    },

    description: {
        color: colors.textMuted,
        fontFamily: fonts.body,
        fontSize: 16,
        lineHeight: 26,
    },

    technologies: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
    },

    tag: {
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        backgroundColor: colors.surfaceRaised,
        borderWidth: 1,
        borderColor: 'rgba(68, 71, 73, 0.4)',
        borderRadius: 4,
    },

    tagText: {
        color: colors.textMuted,
        fontFamily: fonts.code,
        fontSize: 11,
        lineHeight: 18,
    },

    footer: {
        marginTop: 'auto',
        paddingTop: spacing.md,
        borderTopWidth: 1,
        borderTopColor: 'rgba(68, 71, 73, 0.4)',
    },

    link: {
        alignSelf: 'flex-start',
        paddingVertical: spacing.sm,
        color: colors.accent,
        fontFamily: fonts.bodyMedium,
        fontSize: 14,
    },
});