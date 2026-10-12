import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, spacing } from '@/theme';

type TechnologyTagsProps = {
    technologies: string[];
};

export function TechnologyTags({
    technologies,
}: TechnologyTagsProps) {
    return (
        <View style={styles.container}>
            {technologies.map((technology) => (
                <View key={technology} style={styles.tag}>
                    <Text style={styles.text}>
                        {technology}
                    </Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
    },

    tag: {
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        backgroundColor: colors.surfaceRaised,
        borderWidth: 1,
        borderColor: 'rgba(68, 71, 73, 0.4)',
        borderRadius: 4,
    },

    text: {
        color: colors.textMuted,
        fontFamily: fonts.code,
        fontSize: 12,
        lineHeight: 18,
    },
});