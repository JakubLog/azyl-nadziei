/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Links, UnderLine, Link } from './Navigation.styles';
import { useMenu } from 'hooks/useMenu';
import { gsap } from 'gsap';

interface props {
  isExpanded?: boolean;
}

export let indicator: React.RefObject<HTMLDivElement>, links: React.RefObject<HTMLUListElement>;

const Navigation: React.FC<props> = ({ isExpanded = false }) => {
  indicator = useRef<HTMLDivElement>(null);
  links = useRef<HTMLUListElement>(null);

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

  useEffect(() => {
    if (window.innerWidth > 750 && links.current) {
      gsap.from(links?.current.children, { color: 'transparent', duration: 1.5, delay: 0.5, stagger: 0.3 });
    }
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
