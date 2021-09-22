import React from 'react';
import { GlobalStyles } from 'assets/css/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/css/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorProvider from 'hooks/useError';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import ModalProvider from 'hooks/useModal';

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`
  }
});

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <ErrorProvider>
        <ModalProvider>
          <ClientContext.Provider value={client}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </ClientContext.Provider>
        </ModalProvider>
      </ErrorProvider>
    </Router>
  );
};

export default AppProviders;
