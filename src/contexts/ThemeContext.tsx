import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Theme, ThemeColors, ThemeContextType } from '../types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const darkThemeColors: ThemeColors = {
  background: '#0a0a0a',
  foreground: '#ffffff',
  primary: '#10b981',
  secondary: '#1f2937',
  accent: '#22c55e',
  muted: '#6b7280',
};

const lightThemeColors: ThemeColors = {
  background: '#ffffff',
  foreground: '#0a0a0a',
  primary: '#059669',
  secondary: '#f3f4f6',
  accent: '#10b981',
  muted: '#9ca3af',
};

const getThemeColors = (theme: Theme): ThemeColors => {
  return theme === 'dark' ? darkThemeColors : lightThemeColors;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme');
    return (stored as Theme) || 'dark';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const colors = getThemeColors(theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
