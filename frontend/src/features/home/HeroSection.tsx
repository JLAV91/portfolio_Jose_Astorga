import {
    StyleSheet,
    Pressable,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import { DownloadCV } from '@/components/ui/DownloadCV';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { colors, fonts, spacing } from '@/theme';
import type { SectionId } from '@/types/navigation';
import { ProfilePortrait } from './ProfilePortrait';

type HeroSectionProps = {
    onNavigate: (sectionId: SectionId) => void;
};

export function HeroSection({ onNavigate }: HeroSectionProps) {
    const { width } = useWindowDimensions();
    const isDesktop = width >= 1024;

    return (
        <SectionContainer>
            <View
                style={[
                    styles.layout,
                    isDesktop && styles.desktopLayout,
                ]}
            >
                <View
                    style={[
                        styles.portraitColumn,
                        isDesktop && styles.desktopPortraitColumn,
                    ]}
                >
                    <ProfilePortrait />
                </View>

                <View style={styles.content}>
                    <View style={styles.availability}>
                        <View style={styles.dot} />

                        <Text style={styles.availabilityText}>
                            DISPONIBLE PARA NUEVOS PROYECTOS
                        </Text>
                    </View>

                    <Text
                        accessibilityRole="header"
                        style={[
                            styles.name,
                            isDesktop && styles.desktopName,
                        ]}
                    >
                        JOSÉ ASTORGA VARAS
                    </Text>

                    <View style={styles.roleRow}>
                        <Text style={styles.rolePrefix}>
                            {'$ > role:'}
                        </Text>

                        <Text style={styles.role}>
                            Software Developer | Full Stack
                        </Text>
                    </View>

                    <Text style={styles.description}>
                        Desarrollo soluciones de software integrando backend, web y aplicaciones móviles, con foco en la calidad del código y la experiencia del usuario.
                    </Text>
                    <View style={styles.actions}>
                        <Pressable
                            accessibilityRole="button"
                            onPress={() => onNavigate('projects')}
                            style={({ pressed }) => [
                                styles.primaryButton,
                                pressed && styles.pressedButton,
                            ]}
                        >
                            <Text style={styles.primaryButtonText}>
                                Ver proyectos ↓
                            </Text>
                        </Pressable>

                        <Pressable
                            accessibilityRole="button"
                            onPress={() => onNavigate('contact')}
                            style={({ pressed }) => [
                                styles.secondaryButton,
                                pressed && styles.pressedButton,
                            ]}
                        >
                            <Text style={styles.secondaryButtonText}>
                                Contactar ↗
                            </Text>
                        </Pressable>
                        <DownloadCV />
                    </View>

                </View>
            </View>
        </SectionContainer>
    );
}

const styles = StyleSheet.create({
    layout: {
        gap: spacing.xl,
        paddingVertical: spacing.lg,
    },

    desktopLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.xxl,
        paddingVertical: spacing.xl,
    },

    portraitColumn: {
        alignItems: 'center',
    },

    desktopPortraitColumn: {
        flex: 0.8,
    },

    content: {
        flex: 1,
        minWidth: 0,
        gap: spacing.lg,
    },

    availability: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.sm,
        backgroundColor: 'rgba(0, 219, 233, 0.06)',
        borderWidth: 1,
        borderColor: 'rgba(0, 219, 233, 0.3)',
        borderRadius: 4,
    },

    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: colors.accent,
    },

    availabilityText: {
        flexShrink: 1,
        color: colors.accent,
        fontFamily: fonts.code,
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.8,
    },

    name: {
        color: colors.primary,
        fontFamily: fonts.headingBold,
        fontSize: 38,
        lineHeight: 44,
        letterSpacing: -1,
    },

    desktopName: {
        fontSize: 64,
        lineHeight: 72,
        letterSpacing: -1.9,
    },

    roleRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: spacing.sm,
    },

    rolePrefix: {
        color: colors.accent,
        fontFamily: fonts.code,
        fontSize: 13,
    },

    role: {
        flexShrink: 1,
        color: colors.text,
        fontFamily: fonts.heading,
        fontSize: 24,
        lineHeight: 32,
    },

    description: {
        color: colors.textMuted,
        fontFamily: fonts.body,
        fontSize: 16,
        lineHeight: 28,
    },
    actions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.md,
        marginTop: spacing.sm,
    },

    primaryButton: {
        minHeight: 44,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.sm,
        backgroundColor: colors.primary,
        borderRadius: 4,
    },

    primaryButtonText: {
        color: colors.onPrimary,
        fontFamily: fonts.bodySemiBold,
        fontSize: 14,
    },

    secondaryButton: {
        minHeight: 44,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.sm,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 4,
    },

    secondaryButtonText: {
        color: colors.primary,
        fontFamily: fonts.bodyMedium,
        fontSize: 14,
    },

    pressedButton: {
        opacity: 0.8,
    },

});