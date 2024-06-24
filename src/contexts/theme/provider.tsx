import { ReactNode } from 'react';
import usePersistedState from '../../hooks/usePersistedState';

import { ThemeContext, Theme } from "./context";
import { Light, Dark } from "./theme";
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = usePersistedState<Theme>('theme', 'light');

  const oppositeTheme = theme === 'light' ? 'dark' : 'light';
  const selectedTheme = theme === 'light' ? Light : Dark;

  const isSmDown = useMediaQuery('(max-width: 600px)');

  const toggleTheme = () => setTheme(oppositeTheme);

  const providerValues: ThemeContext = {
    theme,
    selectedTheme,
    oppositeTheme,
    toggleTheme,
    isSmDown,
  };

  return (
    <ThemeContext.Provider value={providerValues}>
      <div
        style={{
          backgroundColor: selectedTheme.colors.bg,
          color: selectedTheme.colors.txt,
          minHeight: '100vh'
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
