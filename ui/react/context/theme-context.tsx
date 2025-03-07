'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemedComponent: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const containerStyle: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#ccc' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '20px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };
  return (
    <div style={containerStyle}>
      <p>
        The current theme is <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

const App: FC = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
