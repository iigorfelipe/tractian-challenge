import { createContext } from "react";
import { SelectedTheme } from "./theme";

export type Theme = 'light' | 'dark';

export type ThemeContext = {
  theme: Theme;
  oppositeTheme: Theme;
  selectedTheme: SelectedTheme;
  toggleTheme: () => void;
  isSmDown: boolean;
};

export const defaultThemeValues: ThemeContext = {
  theme: 'light',
  oppositeTheme: 'dark',
  selectedTheme: {} as SelectedTheme,
  toggleTheme: () => {},
  isSmDown: false,
};

export const ThemeContext = createContext<ThemeContext>(defaultThemeValues);
