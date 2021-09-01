import React, { useState } from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';
import { ReactComponent as LogoSource } from 'assets/img/logo.svg';
import { Wrapper, Body, Logo, Expand, ExpandBurger } from './Navbar.styles';

const Navbar: React.FC = () => {
  const [isExpanded, setExpandedState] = useState(false);

  const toggleState = () => setExpandedState((prev) => !prev);

  return (
    <Wrapper>
      <Body>
        <Logo>
          <LogoSource />
        </Logo>
        <Expand onClick={toggleState}>
          <ExpandBurger className={isExpanded ? 'active' : 'no'} />
        </Expand>
        <Navigation isExpanded={isExpanded} />
      </Body>
    </Wrapper>
  );
};

export default Navbar;
