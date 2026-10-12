import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { colors, fonts, spacing, typography } from '@/theme';
import { education } from './data';

export function EducationSection() {
    const { width } = useWindowDimensions();

    const columnStyle = width >= 1024
        ? styles.threeColumns
        : width >= 640
            ? styles.twoColumns
            : styles.oneColumn;
    return (
        <SectionContainer>
            <SectionTitle
                number="03"
                title="Estudios y certificaciones"
            />

            <View style={styles.list}>
                {education.map((item) => (
                    <View key={item.id} style={[styles.card, columnStyle]}>
                        <Text style={styles.category}>
                            {item.category}
                        </Text>

                        <Text accessibilityRole="header" style={styles.title}>
                            {item.title}
                        </Text>

                        <Text style={styles.institution}>
                            {item.institution}
                        </Text>

                        {item.period && (
                            <Text style={styles.period}>
                                {item.period}
                            </Text>
                        )}
                        {item.certificateUrl && (
                            <Link
                                href={item.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.certificateLink}
                            >
                                Ver certificado ↗
                            </Link>
                        )}
                    </View>
                ))}
            </View>
        </SectionContainer>
    );
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: spacing.lg,
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
        fontFamily: fonts.code,
        letterSpacing: 1,
    },

    title: {
        color: colors.primary,
        fontSize: typography.subtitle,
        fontFamily: fonts.heading,
    },

    institution: {
        color: colors.textMuted,
        fontSize: typography.body,
        fontFamily: fonts.body,
        lineHeight: 24,
    },

    period: {
        color: colors.textMuted,
        fontSize: typography.small,
        fontFamily: fonts.code,
    },
    certificateLink: {
        alignSelf: 'flex-start',
        marginTop: spacing.sm,
        paddingVertical: spacing.sm,
        color: colors.accent,
        fontFamily: fonts.bodyMedium,
        fontSize: 14,
    },
    oneColumn: {
        width: '100%',
    },

    twoColumns: {
        width: '48%',
    },

    threeColumns: {
        width: '31%',
    },
});