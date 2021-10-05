import React from 'react';
import SiteTitle from 'components/molecules/SiteTitle/SiteTitle';
import { Wrapper } from './Contact.styles';
import QAA from 'components/organisms/QAA/QAA';

const Contact: React.FC = () => {
  return (
    <Wrapper>
      <SiteTitle
        title="Kontakt"
        subtitle="Masz pytania? Chcesz zaadoptować zwierzę?
Jesteśmy tu dla ciebie!"
      />
      <QAA />
    </Wrapper>
  );
};

export default Contact;
