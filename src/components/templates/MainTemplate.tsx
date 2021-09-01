import React from 'react';
import Footer from 'components/organisms/Footer/Footer';
import Navbar from 'components/organisms/Navbar/Navbar';
import { Wrapper, Site } from './MainTemplate.styles';

const MainTemplate: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Site>{children}</Site>
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
