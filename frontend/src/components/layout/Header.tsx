import { useState } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';

import { colors, spacing, fonts } from '@/theme';
import type { SectionId } from '@/types/navigation';

type HeaderProps = {
    onNavigate: (section: SectionId) => void;
};

type NavigationItem = {
    id: SectionId;
    label: string;
};

const navigationItems: NavigationItem[] = [
    { id: 'about', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'education', label: 'Estudios' },
    { id: 'experience', label: 'Trayectoria' },
    { id: 'contact', label: 'Contacto' },
];

export function Header({ onNavigate }: HeaderProps) {
    const { width } = useWindowDimensions();
    const [selectedSection, setSelectedSection] =
        useState<SectionId>('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const showNavigation = width >= 1100;
    const showProjectsButton = width >= 640;
    const isCompact = width < 400;

    function navigateTo(section: SectionId) {
        setSelectedSection(section);
        setIsMenuOpen(false);
        onNavigate(section);
    }

    return (
        <View style={styles.header}>
            <View style={styles.container}>
                {/* Marca */}
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Volver al inicio"
                    onPress={() => navigateTo('home')}
                    style={styles.brand}
                >
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>
                            {'</>'}
                        </Text>
                    </View>

                    <Text
                        numberOfLines={1}
                        style={[
                            styles.name,
                            isCompact && styles.compactName,
                        ]}
                    >
                        JOSÉ ASTORGA VARAS
                    </Text>
                </Pressable>

                {/* Navegación de escritorio */}
                {showNavigation && (
                    <View style={styles.navigation}>
                        {navigationItems.map((item) => {
                            const isSelected =
                                selectedSection === item.id;

                            return (
                                <Pressable
                                    key={item.id}
                                    accessibilityRole="button"
                                    accessibilityState={{
                                        selected: isSelected,
                                    }}
                                    onPress={() => navigateTo(item.id)}
                                    style={[
                                        styles.navigationItem,
                                        isSelected &&
                                        styles.selectedItem,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.navigationText,
                                            isSelected &&
                                            styles.selectedText,
                                        ]}
                                    >
                                        {item.label}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>
                )}

                {/* Acciones */}
                <View style={styles.actions}>
                    {showProjectsButton && (
                        <Pressable
                            accessibilityRole="button"
                            onPress={() => navigateTo('projects')}
                            style={styles.projectsButton}
                        >
                            <Text style={styles.projectsText}>
                                Ver proyectos
                            </Text>
                        </Pressable>
                    )}

                    <Pressable
                        accessibilityRole="button"
                        onPress={() => navigateTo('contact')}
                        style={({ pressed }) => [
                            styles.contactButton,
                            pressed && styles.pressedButton,
                        ]}
                    >
                        <Text style={styles.contactText}>
                            Contactar ↗
                        </Text>
                    </Pressable>
                    {!showNavigation && (
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel={
                                isMenuOpen ? 'Cerrar menú' : 'Abrir menú'
                            }
                            accessibilityState={{ expanded: isMenuOpen }}
                            onPress={() => setIsMenuOpen((previous) => !previous)}
                            style={styles.menuButton}
                        >
                            <Text style={styles.menuButtonText}>
                                {isMenuOpen ? '×' : '☰'}
                            </Text>
                        </Pressable>
                    )}
                </View>
            </View>
            {!showNavigation && isMenuOpen && (
                <View style={styles.mobileMenu}>
                    {navigationItems.map((item) => (
                        <Pressable
                            key={item.id}
                            accessibilityRole="button"
                            accessibilityState={{
                                selected: selectedSection === item.id,
                            }}
                            onPress={() => navigateTo(item.id)}
                            style={styles.mobileMenuItem}
                        >
                            <Text
                                style={[
                                    styles.navigationText,
                                    selectedSection === item.id &&
                                    styles.selectedText,
                                ]}
                            >
                                {item.label}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(68, 71, 73, 0.3)',
        position: 'relative',
        zIndex: 10,
    },

    container: {
        width: '100%',
        maxWidth: 1280,
        minHeight: 64,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.sm,
        gap: spacing.md,
    },

    brand: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        flexShrink: 1,
        minWidth: 0,
    },

    logo: {
        width: 32,
        height: 32,
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surfaceRaised,
        borderWidth: 1,
        borderColor: 'rgba(68, 71, 73, 0.4)',
        borderRadius: 4,
    },

    logoText: {
        color: colors.accent,
        fontFamily: fonts.code,
        fontSize: 13,
    },

    name: {
        flexShrink: 1,
        color: colors.primary,
        fontFamily: fonts.headingBold,
        fontSize: 20,
        letterSpacing: -0.4,
    },

    compactName: {
        fontSize: 12,
    },

    navigation: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.lg,
    },

    navigationItem: {
        paddingVertical: spacing.sm,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },

    selectedItem: {
        borderBottomColor: colors.accent,
    },

    navigationText: {
        color: colors.textMuted,
        fontFamily: fonts.bodyMedium,
        fontSize: 14,
    },

    selectedText: {
        color: colors.accent,
    },

    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        flexShrink: 0,
    },

    projectsButton: {
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.sm,
    },

    projectsText: {
        color: colors.textMuted,
        fontFamily: fonts.bodyMedium,
        fontSize: 13,
    },

    contactButton: {
        minHeight: 36,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        backgroundColor: colors.primary,
        borderRadius: 8,
    },

    contactText: {
        color: colors.onPrimary,
        fontFamily: fonts.bodySemiBold,
        fontSize: 13,
    },

    pressedButton: {
        opacity: 0.8,
        transform: [{ scale: 0.97 }],
    },
    menuButton: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surfaceRaised,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 6,
    },

    menuButtonText: {
        color: colors.primary,
        fontSize: 24,
        lineHeight: 28,
    },

    mobileMenu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.sm,
        backgroundColor: colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },

    mobileMenuItem: {
        minHeight: 44,
        justifyContent: 'center',
        paddingVertical: spacing.sm,
    },
});