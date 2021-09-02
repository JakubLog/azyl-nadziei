import React from 'react';
import { GlobalStyles } from 'assets/css/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/css/theme';
import { BrowserRouter as Router } from 'react-router-dom';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
