import MainTemplate from 'components/templates/MainTemplate';
import React from 'react';
import { Route } from 'react-router-dom';
import Error from 'components/molecules/Error/Error';
import { useError } from 'hooks/useError';
import Home from './Home/Home';

const App: React.FC = () => {
  const { error } = useError();
  return (
    <>
      <MainTemplate>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <div>About path</div>
        </Route>
        <Route path="/adoption">
          <div>Adoption path</div>
        </Route>
        <Route path="/help">
          <div>Help path</div>
        </Route>
        <Route path="/contact">
          <div>Contact path</div>
        </Route>
      </MainTemplate>
      {error ? <Error message={error} /> : null}
    </>
  );
};

export default App;
