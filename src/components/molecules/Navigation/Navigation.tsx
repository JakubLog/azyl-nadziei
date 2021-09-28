/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Links, UnderLine, Link } from './Navigation.styles';
import { useMenu } from 'hooks/useMenu';

interface props {
  isExpanded?: boolean;
}

const Navigation: React.FC<props> = ({ isExpanded = false }) => {
  const indicator = useRef<HTMLDivElement>(null);
  const links = useRef<HTMLUListElement>(null);

  const { turnOn } = useMenu();

  useEffect(() => {
    if (window.innerWidth > 1540) turnOn(links, indicator);
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1540) turnOn(links, indicator);
    });
    return window.removeEventListener('resize', () => {
      if (window.innerWidth > 1540) turnOn(links, indicator);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper isExpanded={isExpanded}>
      <Links ref={links}>
        <Link to="/" exact>
          Strona Główna
        </Link>
        <Link to="/about">O fundacji</Link>
        <Link to="/adoption">Adopcja</Link>
        <Link to="/help">Jak pomóc?</Link>
        <Link to="/contact">Kontakt</Link>
      </Links>
      <UnderLine ref={indicator} />
    </Wrapper>
  );
};

Navigation.propTypes = {
  isExpanded: PropTypes.bool
};

export default Navigation;
