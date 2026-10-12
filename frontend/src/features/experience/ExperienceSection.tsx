import { StyleSheet, Text, View } from 'react-native';
import { TechnologyTags } from '@/components/ui/TechnologyTags';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { colors, fonts, spacing, typography } from '@/theme';

import { experiences } from './data';

export function ExperienceSection() {
    return (
        <SectionContainer>
            <SectionTitle number="04" title="Trayectoria profesional" />

            <View style={styles.list}>
                {experiences.map((experience) => (
                    <View key={experience.id} style={styles.card}>
                        <Text style={styles.period}>
                            {experience.period}
                        </Text>

                        <Text accessibilityRole="header" style={styles.role}>
                            {experience.role}
                        </Text>

                        <Text style={styles.company}>
                            {experience.company}
                        </Text>

                        <View style={styles.highlights}>
                            {experience.highlights.map((highlight) => (
                                <View key={highlight} style={styles.highlight}>
                                    <Text style={styles.bullet}>•</Text>
                                    <Text style={styles.description}>
                                        {highlight}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        {!!experience.technologies?.length && (
                            <View style={styles.technologies}>
                                <TechnologyTags
                                    technologies={experience.technologies}
                                />
                            </View>
                        )}
                    </View>
                ))}
            </View>
        </SectionContainer>
    );
}

const styles = StyleSheet.create({
    list: {
        gap: spacing.lg,
    },

    card: {
        padding: spacing.lg,
        gap: spacing.sm,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
    },

    period: {
        fontFamily: fonts.code,
        alignSelf: 'flex-start',
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        backgroundColor: colors.surfaceRaised,
        color: colors.accent,
        fontSize: typography.small,
        borderRadius: 4,
    },

    role: {
        fontFamily: fonts.heading,
        color: colors.primary,
        fontSize: typography.subtitle,
    },

    company: {
        fontFamily: fonts.bodyMedium,
        color: colors.accent,
        fontSize: typography.body,
    },

    highlights: {
        marginTop: spacing.md,
        gap: spacing.sm,
    },

    highlight: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: spacing.sm,
    },

    bullet: {
        color: colors.accent,
        fontSize: typography.body,
        lineHeight: 26,
    },

    description: {
        fontFamily: fonts.body,
        flex: 1,
        color: colors.textMuted,
        fontSize: typography.body,
        lineHeight: 26,
    },
    technologies: {
        marginTop: spacing.md,
        paddingTop: spacing.md,
        borderTopWidth: 1,
        borderTopColor: 'rgba(68, 71, 73, 0.4)',
    },
});