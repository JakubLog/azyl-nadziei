import MainTemplate from 'components/templates/MainTemplate';
import React from 'react';
import { Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
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
  );
};

export default App;
