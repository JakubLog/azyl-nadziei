import MainTemplate from 'components/templates/MainTemplate';
import React from 'react';
import { Route } from 'react-router-dom';
import Error from 'components/molecules/Error/Error';
import { useError } from 'hooks/useError';
import Home from './Home/Home';
import About from './About/About';
import Adoption from './Adoption/Adoption';
import Modal from 'components/organisms/Modal/Modal';
import { useModal } from 'hooks/useModal';

const App: React.FC = () => {
  const { error } = useError();
  const { isOpen } = useModal();
  return (
    <>
      <MainTemplate>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/adoption">
          <Adoption />
        </Route>
        <Route path="/help">
          <div>Help path</div>
        </Route>
        <Route path="/contact">
          <div>Contact path</div>
        </Route>
      </MainTemplate>
      {error ? <Error message={error} /> : null}
      {isOpen ? <Modal /> : null}
    </>
  );
};

export default App;
