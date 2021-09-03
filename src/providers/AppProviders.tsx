import React from 'react';
import { GlobalStyles } from 'assets/css/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/css/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorProvider from 'hooks/useError';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <ErrorProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ErrorProvider>
    </Router>
  );
};

export default AppProviders;
