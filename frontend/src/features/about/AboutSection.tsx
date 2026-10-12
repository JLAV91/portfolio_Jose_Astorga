import { StyleSheet, Text, View } from 'react-native';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { colors, fonts, spacing } from '@/theme';

export function AboutSection() {
    return (
        <SectionContainer>
            <SectionTitle number="01" title="Sobre mí" />

            <View style={styles.card}>
                <View style={styles.heading}>
                    <Text style={styles.symbol}>
                        {'>_'}
                    </Text>

                    <Text style={styles.title}>
                        Desarrollo Full Stack con experiencia en el sector financiero
                    </Text>
                </View>

                <Text style={styles.paragraph}>
                    Soy José Astorga Varas, desarrollador Full Stack con
                    experiencia en aplicaciones web públicas y privadas
                    de alta concurrencia para el sector financiero.
                </Text>

                <Text style={styles.paragraph}>
                    Actualmente trabajo como Backend Developer en ImageMaker,
                    para Banco de Chile, desarrollando servicios con Java 21
                    y Spring Boot. Participo en la modernización de aplicaciones,
                    el desarrollo de APIs REST y la mejora de calidad mediante
                    Clean Code, principios SOLID y pruebas unitarias con JUnit.
                </Text>

                <Text style={styles.paragraph}>
                    Anteriormente trabajé en Consorcio desarrollando interfaces
                    con Vue.js y servicios backend con NestJS y Node.js.
                    Complemento mi experiencia profesional estudiando
                    Ingeniería en Informática en Duoc UC.
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
        borderColor: 'rgba(68, 71, 73, 0.5)',
        borderRadius: 8,
    },

    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        marginBottom: spacing.xs,
    },

    symbol: {
        color: colors.accent,
        fontFamily: fonts.code,
        fontSize: 20,
    },

    title: {
        flex: 1,
        color: colors.primary,
        fontFamily: fonts.heading,
        fontSize: 22,
        lineHeight: 30,
    },

    paragraph: {
        color: colors.textMuted,
        fontFamily: fonts.body,
        fontSize: 16,
        lineHeight: 28,
    },
});