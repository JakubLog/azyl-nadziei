import React from 'react';
import SiteTitle from 'components/molecules/SiteTitle/SiteTitle';
import styled from 'styled-components';

export const Wrapper = styled.div``;

const Contact: React.FC = () => {
  return (
    <Wrapper>
      <SiteTitle
        title="Kontakt"
        subtitle="Masz pytania? Chcesz zaadoptować zwierzę?
Jesteśmy tu dla ciebie!"
      />
    </Wrapper>
  );
};

export default Contact;
