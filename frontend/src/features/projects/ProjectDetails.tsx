import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TechnologyTags } from '@/components/ui/TechnologyTags';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { colors, fonts, spacing } from '@/theme';
import { PageMetadata } from '@/components/ui/PageMetadata';
import type { Project } from './types';

type ProjectDetailsProps = {
    project: Project | undefined;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <ScrollView
            style={styles.page}
            showsVerticalScrollIndicator={false}
        >
            <PageMetadata
                title={
                    project
                        ? `${project.title} | José Astorga Varas`
                        : 'Proyecto no encontrado | José Astorga Varas'
                }
                description={
                    project?.shortDescription ??
                    'Consulta los proyectos del portafolio de José Astorga Varas.'
                }
            />
            <SectionContainer>
                <Link href="/" style={styles.backLink}>
                    ← Volver al portafolio
                </Link>

                {project ? (
                    <View style={styles.content}>
                        <Text style={styles.label}>
                            PROYECTO
                        </Text>

                        <Text
                            accessibilityRole="header"
                            style={styles.title}
                        >
                            {project.title}
                        </Text>

                        <Text style={styles.summary}>
                            {project.shortDescription}
                        </Text>

                        <View style={styles.card}>
                            <Text
                                accessibilityRole="header"
                                style={styles.subtitle}
                            >
                                Sobre el proyecto
                            </Text>

                            <Text style={styles.description}>
                                {project.description}
                            </Text>
                        </View>

                        {!!project.technologies?.length && (
                            <View style={styles.card}>
                                <Text
                                    accessibilityRole="header"
                                    style={styles.subtitle}
                                >
                                    Tecnologías
                                </Text>

                                <TechnologyTags technologies={project.technologies} />
                            </View>
                        )}
                    </View>
                ) : (
                    <View style={styles.content}>
                        <Text
                            accessibilityRole="header"
                            style={styles.title}
                        >
                            Proyecto no encontrado
                        </Text>

                        <Text style={styles.description}>
                            No encontramos un proyecto con esta dirección.
                            Puedes volver al portafolio para consultar
                            los proyectos disponibles.
                        </Text>
                    </View>
                )}
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
        marginBottom: spacing.xl,
        paddingVertical: spacing.sm,
        color: colors.accent,
        fontFamily: fonts.bodyMedium,
        fontSize: 14,
    },

    content: {
        width: '100%',
        maxWidth: 900,
        gap: spacing.lg,
    },

    label: {
        color: colors.accent,
        fontFamily: fonts.code,
        fontSize: 12,
        letterSpacing: 1,
    },

    title: {
        color: colors.primary,
        fontFamily: fonts.headingBold,
        fontSize: 38,
        lineHeight: 46,
        letterSpacing: -0.8,
    },

    summary: {
        color: colors.textMuted,
        fontFamily: fonts.body,
        fontSize: 18,
        lineHeight: 30,
    },

    card: {
        padding: spacing.lg,
        gap: spacing.md,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: 'rgba(68, 71, 73, 0.5)',
        borderRadius: 8,
    },

    subtitle: {
        color: colors.primary,
        fontFamily: fonts.heading,
        fontSize: 22,
        lineHeight: 30,
    },

    description: {
        color: colors.textMuted,
        fontFamily: fonts.body,
        fontSize: 16,
        lineHeight: 28,
    },

});