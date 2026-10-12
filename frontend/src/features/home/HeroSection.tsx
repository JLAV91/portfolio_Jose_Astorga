import { StyleSheet, Text, View } from 'react-native';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { colors, spacing, typography } from '@/theme';

export function HeroSection() {
    return (
        <SectionContainer>
            <View style={styles.content}>
                <Text style={styles.availability}>
                    DISPONIBLE PARA NUEVOS PROYECTOS
                </Text>

                <Text accessibilityRole="header" style={styles.name}>
                    JOSÉ ASTORGA VARAS
                </Text>

                <Text style={styles.role}>
                    Software Developer
                </Text>

                <Text style={styles.description}>
                    Desarrollo soluciones backend y aplicaciones móviles,
                    combinando Java, Spring Boot y React Native.
                </Text>

                <Text style={styles.technologies}>
                    Java • Spring Boot • React Native • PostgreSQL
                </Text>
            </View>
        </SectionContainer>
    );
}

const styles = StyleSheet.create({
    content: {
        width: '100%',
        maxWidth: 720,
        gap: spacing.lg,
    },

    availability: {
        alignSelf: 'flex-start',
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderWidth: 1,
        borderColor: colors.accent,
        borderRadius: 4,
        color: colors.accent,
        fontSize: typography.small,
        letterSpacing: 1,
    },

    name: {
        color: colors.primary,
        fontSize: typography.title,
        fontWeight: 'bold',
    },

    role: {
        color: colors.text,
        fontSize: typography.subtitle,
        fontWeight: '600',
    },

    description: {
        color: colors.textMuted,
        fontSize: typography.body,
        lineHeight: 26,
    },

    technologies: {
        color: colors.accent,
        fontSize: typography.small,
        lineHeight: 22,
    },
});