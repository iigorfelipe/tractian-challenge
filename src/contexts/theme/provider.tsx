import { ReactNode } from 'react';
import usePersistedState from '../../hooks/usePersistedState';
import useMediaQuery from '../../hooks/useMediaQuery';
import { ThemeContext, Theme } from './context';
import { Light, Dark } from './theme';

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = usePersistedState<Theme>('theme', 'light');

  const oppositeTheme = theme === 'light' ? 'dark' : 'light';
  const selectedTheme = theme === 'light' ? Light : Dark;

  const isSmDown = useMediaQuery('(max-width: 600px)');
  const isMdDown = useMediaQuery('(max-width: 1100px)');

  const toggleTheme = () => setTheme(oppositeTheme);

  const providerValues: ThemeContext = {
    theme,
    selectedTheme,
    oppositeTheme,
    toggleTheme,
    isSmDown,
    isMdDown,
  };

  return (
    <ThemeContext.Provider value={providerValues}>
      <div
        style={{
          backgroundColor: selectedTheme.colors.bg,
          color: selectedTheme.colors.txt,
          minHeight: '100vh',
          fontFamily: 'Inter'
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
