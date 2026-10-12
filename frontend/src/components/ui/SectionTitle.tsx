import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography } from '@/theme';

type SectionTitleProps = {
    number: string;
    title: string;
};

export function SectionTitle({ number, title }: SectionTitleProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{number}.</Text>
            <Text accessibilityRole="header" style={styles.title}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: spacing.sm,
        marginBottom: spacing.lg,
    },

    number: {
        color: colors.accent,
        fontSize: typography.small,
        fontWeight: 'bold',
    },

    title: {
        flex: 1,
        color: colors.primary,
        fontSize: typography.subtitle,
        fontWeight: 'bold',
    },
});