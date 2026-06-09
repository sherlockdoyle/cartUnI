import { useEffect, useState } from 'react';

type Theme = 'system' | 'light' | 'dark';

export default function useTheme(defaultTheme?: Theme, storageKey: string = 'app-theme') {
  const themeState = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) ?? defaultTheme ?? 'system');
  const [theme] = themeState;
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      root.removeAttribute('data-theme');
      localStorage.removeItem(storageKey);
    } else {
      root.dataset.theme = theme;
      localStorage.setItem(storageKey, theme);
    }
  }, [theme]);

  return themeState;
}
