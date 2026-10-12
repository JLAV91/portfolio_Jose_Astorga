import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography } from '@/theme';

export function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <View style={styles.brand}>
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>
                            {'</>'}
                        </Text>
                    </View>

                    <Text style={styles.name}>
                        JOSÉ ASTORGA VARAS
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },

    container: {
        width: '100%',
        maxWidth: 1200,
        alignSelf: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
    },

    brand: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },

    logo: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surfaceRaised,
        borderRadius: 4,
    },

    logoText: {
        color: colors.accent,
        fontSize: typography.small,
        fontWeight: 'bold',
    },

    name: {
        flexShrink: 1,
        color: colors.primary,
        fontSize: typography.small,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});