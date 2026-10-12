import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>José Astorga</Text>

      <Text style={styles.subtitle}>
        Software Developer
      </Text>

      <Text style={styles.description}>
        Mobile • Backend • Cloud
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 22,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});