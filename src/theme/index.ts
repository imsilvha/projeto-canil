import { MD3DarkTheme, MD3LightTheme, configureFonts } from 'react-native-paper';
import type { MD3Theme } from 'react-native-paper';

const fontConfig = configureFonts({
  config: {
    fontFamily: 'System',
  },
});

const baseLight: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2d6a4f',
    secondary: '#95d5b2',
    background: '#f1f5f2',
  },
  fonts: fontConfig,
};

const baseDark: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#95d5b2',
    secondary: '#2d6a4f',
    background: '#14213d',
  },
  fonts: fontConfig,
};

export const getTheme = (mode: 'light' | 'dark'): MD3Theme => (mode === 'dark' ? baseDark : baseLight);
