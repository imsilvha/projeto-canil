import { Appearance } from 'react-native';
import { create } from 'zustand';

type ThemePreference = 'light' | 'dark';

type ThemeStore = {
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
  toggleTheme: () => void;
};

const getSystemTheme = (): ThemePreference => {
  const systemTheme = Appearance.getColorScheme();
  return systemTheme === 'dark' ? 'dark' : 'light';
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: getSystemTheme(),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
