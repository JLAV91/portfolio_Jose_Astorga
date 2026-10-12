import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { colors, spacing, typography } from '@/theme';

import { contact } from './data';

export function ContactSection() {
    return (
        <SectionContainer>
            <SectionTitle number="05" title="Contacto" />

            <View style={styles.card}>
                <Text accessibilityRole="header" style={styles.title}>
                    Hablemos de tu próximo proyecto
                </Text>

                <Text style={styles.description}>
                    Si quieres conversar sobre una oportunidad profesional
                    o un proyecto de software, puedes contactarme por
                    estos medios.
                </Text>

                <View style={styles.links}>
                    <Link
                        href={`mailto:${contact.email}`}
                        style={styles.emailLink}
                    >
                        Escribirme por correo →
                    </Link>

                    <Link
                        href={`https://github.com/${contact.githubUsername}`}
                        style={styles.profileLink}
                    >
                        GitHub ↗
                    </Link>

                    <Link
                        href={`https://www.linkedin.com/in/${contact.linkedinUsername}`}
                        style={styles.profileLink}
                    >
                        LinkedIn ↗
                    </Link>
                </View>
            </View>
        </SectionContainer>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: spacing.lg,
        gap: spacing.lg,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
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

    links: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: spacing.md,
    },

    emailLink: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        backgroundColor: colors.accent,
        color: colors.background,
        fontSize: typography.body,
        fontWeight: '600',
        borderRadius: 4,
    },

    profileLink: {
        paddingVertical: spacing.sm,
        color: colors.accent,
        fontSize: typography.body,
        fontWeight: '600',
    },
});