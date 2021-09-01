import React from 'react';
import { GlobalStyles } from 'assets/css/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/css/theme';

const AppProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
