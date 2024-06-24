import { useContext } from "react";
import { ThemeContext } from "./context"

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme must be used in a ThemeProvider'
    );
  };

  return context;
};