import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { colors, fonts, spacing } from '@/theme';

import { contact } from './data';

export function ContactSection() {
    return (
        <SectionContainer>
            <SectionTitle number="05" title="Contacto" />

            <View style={styles.card}>
                <Text style={styles.label}>
                    CONECTEMOS
                </Text>

                <Text
                    accessibilityRole="header"
                    style={styles.title}
                >
                    Hablemos de tu próximo proyecto
                </Text>

                <Text style={styles.description}>
                    Si quieres conversar sobre desarrollo backend,
                    web o móvil, colaborar en un proyecto o compartir
                    una oportunidad profesional, puedes escribirme.
                </Text>

                <Link
                    href={`mailto:${contact.email}`}
                    style={styles.emailLink}
                >
                    Escribirme por correo ↗
                </Link>

                <Text selectable style={styles.email}>
                    {contact.email}
                </Text>

                <View style={styles.divider} />

                <Text style={styles.label}>
                    CONEXIONES DIRECTAS
                </Text>

                <View style={styles.profiles}>
                    <Link
                        href={`https://www.linkedin.com/in/${contact.linkedinUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.profileLink}
                    >
                        LinkedIn ↗
                    </Link>

                    {contact.githubUsername && (
                        <Link
                            href={`https://github.com/${contact.githubUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.profileLink}
                        >
                            GitHub ↗
                        </Link>
                    )}
                </View>
            </View>
        </SectionContainer>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: spacing.lg,
        gap: spacing.md,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: 'rgba(68, 71, 73, 0.5)',
        borderRadius: 8,
    },

    label: {
        color: colors.accent,
        fontFamily: fonts.code,
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 1,
    },

    title: {
        color: colors.primary,
        fontFamily: fonts.heading,
        fontSize: 28,
        lineHeight: 36,
    },

    description: {
        maxWidth: 680,
        color: colors.textMuted,
        fontFamily: fonts.body,
        fontSize: 16,
        lineHeight: 28,
    },

    emailLink: {
        alignSelf: 'flex-start',
        marginTop: spacing.sm,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        backgroundColor: colors.accent,
        color: colors.background,
        fontFamily: fonts.bodySemiBold,
        fontSize: 15,
        borderRadius: 6,
    },

    email: {
        color: colors.textMuted,
        fontFamily: fonts.code,
        fontSize: 13,
        lineHeight: 22,
    },

    divider: {
        height: 1,
        marginVertical: spacing.sm,
        backgroundColor: 'rgba(68, 71, 73, 0.4)',
    },

    profiles: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.md,
    },

    profileLink: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        backgroundColor: colors.surfaceRaised,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 6,
        color: colors.primary,
        fontFamily: fonts.bodyMedium,
        fontSize: 14,
    },
});