import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, spacing } from '@/theme';

type SectionTitleProps = {
    number: string;
    title: string;
};

export function SectionTitle({
    number,
    title,
}: SectionTitleProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>
                {number}.
            </Text>

            <Text accessibilityRole="header" style={styles.title}>
                {title}
            </Text>

            <View style={styles.line} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        marginBottom: spacing.lg,
    },

    number: {
        color: colors.accent,
        fontFamily: fonts.code,
        fontSize: 13,
    },

    title: {
        flexShrink: 1,
        color: colors.primary,
        fontFamily: fonts.heading,
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: -0.6,
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(68, 71, 73, 0.4)',
    },
});