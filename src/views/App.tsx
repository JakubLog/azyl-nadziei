import MainTemplate from 'components/templates/MainTemplate';
import React from 'react';
import { Route } from 'react-router-dom';
import Error from 'components/molecules/Error/Error';

const App: React.FC = () => {
  return (
    <>
      <MainTemplate>
        <Route path="/" exact>
          <div>Home path</div>
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
      <Error message="error ddfskdkf sk fd f sd sdf ds  s fds f sdds dsd sdoejn tobnprj p" />
    </>
  );
};

export default App;
