import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Links } from './Navigation.styles';

interface props {
  isExpanded?: boolean;
}

const Navigation: React.FC<props> = ({ isExpanded = false }) => {
  return (
    <Wrapper isExpanded={isExpanded}>
      <Links>
        <li className="active">Strona Główna</li>
        <li>O fundacji</li>
        <li>Adopcja</li>
        <li>Jak pomóc?</li>
        <li>Kontakt</li>
        <li>Kontakt</li>
        <li>Kontakt</li>
      </Links>
    </Wrapper>
  );
};

Navigation.propTypes = {
  isExpanded: PropTypes.bool
};

export default Navigation;
