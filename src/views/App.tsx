import MainTemplate from 'components/templates/MainTemplate';
import React from 'react';
import { Route } from 'react-router-dom';
import Error from 'components/molecules/Error/Error';
import { useError } from 'hooks/useError';
import Home from './Home/Home';
import About from './About/About';
import Adoption from './Adoption/Adoption';
import Modal from 'components/organisms/Modal/Modal';

const App: React.FC = () => {
  const { error } = useError();
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
      {/* {isOpen ? <Modal title={title} content={content} /> : null} */}
      <Modal
        title="Klakier"
        content={<div>aaa</div>}
        buttons={[
          { text: 'Wyjdź', onClick: () => alert('Uga buga') },
          { text: 'Zaadoptuj', onClick: () => alert('Agu bugu') }
        ]}
        rightCorner={<div>Kotek, lat 3</div>}
      />
    </>
  );
};

export default App;
