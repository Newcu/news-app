// app/components/ThemeProvider.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme | undefined;
  toggleTheme: () => void;
  mounted: boolean;
};

// Set initial context with undefined theme and no-op toggle
const initialContext: ThemeContextType = {
  theme: undefined,
  toggleTheme: () => {},
  mounted: false
};

const ThemeContext = createContext<ThemeContextType>(initialContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Start with undefined theme to avoid hydration mismatch
  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  // Initialize theme after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    // Only apply theme after component is mounted and theme is determined
    if (!mounted || theme === undefined) return;
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Always provide a context, even during server-side rendering
  // but with the appropriate mounted flag
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}