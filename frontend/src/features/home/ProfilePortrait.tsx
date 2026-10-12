import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, spacing } from '@/theme';

export function ProfilePortrait() {
    return (
        <View style={styles.container}>
            <View style={styles.portrait}>
                <View style={styles.frame}>
                    <Image
                        source={require('../../../assets/images/profil.png')}
                        accessibilityLabel="Fotografía de José Astorga Varas"
                        contentFit="cover"
                        style={styles.image}
                    />
                </View>

                <View style={styles.badge}>
                    <View style={styles.dot} />

                    <Text style={styles.badgeText}>
                        ONLINE
                    </Text>
                </View>
            </View>

            <View style={styles.location}>
                <View style={styles.locationDot} />

                <Text style={styles.locationText}>
                    Santiago, Chile
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: spacing.lg,
    },

    portrait: {
        position: 'relative',
    },

    frame: {
        width: 256,
        height: 256,
        padding: spacing.xs,
        borderRadius: 128,
        borderWidth: 2,
        borderColor: 'rgba(0, 219, 233, 0.4)',
        backgroundColor: colors.surfaceRaised,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 128,
    },

    badge: {
        position: 'absolute',
        bottom: spacing.sm,
        right: spacing.sm,
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.accent,
        borderRadius: 20,
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.accent,
    },

    badgeText: {
        color: colors.accent,
        fontFamily: fonts.code,
        fontSize: 11,
        letterSpacing: 1,
    },

    location: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 24,
    },

    locationDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#34d399',
    },

    locationText: {
        color: colors.textMuted,
        fontFamily: fonts.code,
        fontSize: 12,
    },
});