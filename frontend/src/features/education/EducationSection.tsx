import { StyleSheet, Text, View } from 'react-native';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { colors, spacing, typography } from '@/theme';

import { education } from './data';

export function EducationSection() {
    return (
        <SectionContainer>
            <SectionTitle
                number="03"
                title="Estudios y certificaciones"
            />

            <View style={styles.list}>
                {education.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <Text style={styles.category}>
                            {item.category}
                        </Text>

                        <Text accessibilityRole="header" style={styles.title}>
                            {item.title}
                        </Text>

                        <Text style={styles.institution}>
                            {item.institution}
                        </Text>

                        <Text style={styles.period}>
                            {item.period}
                        </Text>
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
        borderLeftWidth: 3,
        borderLeftColor: colors.accent,
        borderRadius: 8,
    },

    category: {
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

    institution: {
        color: colors.textMuted,
        fontSize: typography.body,
        lineHeight: 24,
    },

    period: {
        color: colors.textMuted,
        fontSize: typography.small,
    },
});