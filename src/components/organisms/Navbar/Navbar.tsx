import React, { useState, useEffect, useRef } from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';
import { ReactComponent as LogoSource } from 'assets/img/logo.svg';
import { Wrapper, Body, Logo, Expand, ExpandBurger } from './Navbar.styles';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [isExpanded, setExpandedState] = useState(false);

  const toggleState = () => setExpandedState((prev) => !prev);

  const logo = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (window.innerWidth > 750 && logo.current) {
      gsap.set(logo.current, { visibility: 'visible' });
      gsap.from(logo.current, { opacity: 0, duration: 2, delay: 0.5 });
    }
  }, []);

  return (
    <Wrapper>
      <Body>
        <Logo style={{ visibility: 'hidden' }} ref={logo}>
          <LogoSource />
        </Logo>
        <Expand onClick={toggleState}>
          <ExpandBurger className={isExpanded ? 'active' : 'no-active'} />
        </Expand>
        <Navigation isExpanded={isExpanded} />
      </Body>
    </Wrapper>
  );
};

export default Navbar;
