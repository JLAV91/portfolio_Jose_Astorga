import { StyleSheet, Text, View } from 'react-native';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { colors, spacing, typography } from '@/theme';

export function AboutSection() {
    return (
        <SectionContainer>
            <SectionTitle number="01" title="Sobre mí" />

            <View style={styles.card}>
                <Text style={styles.heading}>
                    Ingeniería guiada por el rigor y la arquitectura
                </Text>

                <Text style={styles.paragraph}>
                    Soy desarrollador de software con interés en construir
                    soluciones claras, mantenibles y confiables. Mi trabajo
                    combina el desarrollo backend con la creación de
                    experiencias móviles.
                </Text>

                <Text style={styles.paragraph}>
                    Trabajo con Java, Spring Boot, React Native y PostgreSQL,
                    buscando conectar una arquitectura sólida con interfaces
                    simples y útiles para las personas.
                </Text>
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
        borderColor: colors.border,
        borderRadius: 8,
    },

    heading: {
        color: colors.primary,
        fontSize: typography.body,
        fontWeight: '600',
        lineHeight: 24,
    },

    paragraph: {
        color: colors.textMuted,
        fontSize: typography.body,
        lineHeight: 26,
    },
});