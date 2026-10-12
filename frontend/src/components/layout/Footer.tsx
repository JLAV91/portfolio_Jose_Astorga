import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, spacing } from '@/theme';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <View style={styles.footer}>
            <View style={styles.container}>
                <View style={styles.identity}>
                    <Text style={styles.name}>
                        JOSÉ ASTORGA VARAS
                    </Text>

                    <Text style={styles.description}>
                        Backend, web y desarrollo móvil.
                    </Text>
                </View>

                <Text style={styles.copyright}>
                    © {currentYear} José Astorga Varas
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        backgroundColor: colors.background,
        borderTopWidth: 1,
        borderTopColor: 'rgba(68, 71, 73, 0.3)',
    },

    container: {
        width: '100%',
        maxWidth: 1200,
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing.lg,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.xl,
    },

    identity: {
        flexShrink: 1,
        gap: spacing.sm,
    },

    name: {
        color: colors.primary,
        fontFamily: fonts.headingBold,
        fontSize: 16,
        lineHeight: 24,
    },

    description: {
        color: colors.textMuted,
        fontFamily: fonts.body,
        fontSize: 14,
        lineHeight: 22,
    },

    copyright: {
        color: colors.textMuted,
        fontFamily: fonts.code,
        fontSize: 12,
        lineHeight: 20,
    },
});