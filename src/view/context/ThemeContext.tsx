import type { PropsWithChildren } from 'react';
import { ThemeProvider, type Theme } from '@emotion/react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { darkTheme, lightTheme } from '@/view/styles/themes';

interface ThemeContextValue {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  // State to store the current theme
  const [theme, setTheme] = useState<Theme>(lightTheme);

  // State to determine if the current theme is light or dark
  const [isDarkMode, setIsDarkMode] = useState(false);

  /** Function to toggle the theme */
  const toggleTheme = useCallback(() => {
    setTheme(isDarkMode ? lightTheme : darkTheme);
    setIsDarkMode(!isDarkMode);

    // Save the user's choice in localStorage
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  }, [isDarkMode]);

  // Detect user's preferred theme mode on initial load
  useEffect(() => {
    // Check if a theme preference exists in localStorage
    const storedPreference = localStorage.getItem('isDarkMode');

    if (storedPreference !== null) {
      const isDarkModePreference = JSON.parse(storedPreference);
      setTheme(isDarkModePreference ? darkTheme : lightTheme);
      setIsDarkMode(isDarkModePreference);
      return;
    }
    // Fallback to system preference if no localStorage value exists
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    setTheme(prefersDarkMode ? darkTheme : lightTheme);
    setIsDarkMode(prefersDarkMode);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme: theme, isDarkMode, toggleTheme: toggleTheme }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMyTheme = () => useContext(ThemeContext);
