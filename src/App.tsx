import SettingsProvider from './contexts/settings/provider';
import ThemeProvider from './contexts/theme/provider';
import Home from './pages/home';

const App = () => {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <Home />
      </SettingsProvider>
    </ThemeProvider>
  );
};

export default App;
