import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { format } from 'date-fns';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Surface, Text } from 'react-native-paper';

import { useThemeStore } from '@/stores/useThemeStore';

export default function HomeScreen() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const today = useMemo(() => format(new Date(), 'dd/MM/yyyy'), []);

  return (
    <>
      <Stack.Screen options={{ title: 'Canil Público' }} />
      <SafeAreaView style={styles.container}>
        <Surface style={styles.card} elevation={1}>
          <Text variant="headlineSmall" style={styles.title}>
            Bem-vindo ao Canil Público
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            Hoje é {today}. Explore e gerencie os dados do canil com praticidade.
          </Text>
          <Button mode="contained" onPress={toggleTheme} style={styles.button}>
            Alternar para o tema {theme === 'dark' ? 'claro' : 'escuro'}
          </Button>
          <Link href="/" asChild>
            <Button mode="text">Ver mais novidades em breve</Button>
          </Link>
        </Surface>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    padding: 24,
    gap: 16,
    borderRadius: 16,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
  },
});
