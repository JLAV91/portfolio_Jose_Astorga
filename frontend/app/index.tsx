import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/layout/Header';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { colors, spacing, typography } from '@/theme';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <Header />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >
        <SectionContainer>
          <View style={styles.introduction}>
            <Text style={styles.title}>
              José Astorga
            </Text>

            <Text style={styles.subtitle}>
              Software Developer
            </Text>

            <Text style={styles.description}>
              Mobile • Backend • Cloud
            </Text>
          </View>
        </SectionContainer>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scroll: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
  },

  introduction: {
    gap: spacing.sm,
  },

  title: {
    fontSize: typography.title,
    fontWeight: 'bold',
    color: colors.primary,
  },

  subtitle: {
    fontSize: typography.subtitle,
    color: colors.text,
  },

  description: {
    fontSize: typography.body,
    color: colors.accent,
  },
});