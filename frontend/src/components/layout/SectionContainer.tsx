

import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { spacing } from '@/theme';

export function SectionContainer({ children }: PropsWithChildren) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 1200,
        alignSelf: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.xl,
    },
});