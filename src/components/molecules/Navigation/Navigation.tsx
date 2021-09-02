/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Links, UnderLine, Link } from './Navigation.styles';
import { gsap } from 'gsap';

interface props {
  isExpanded?: boolean;
}

const Navigation: React.FC<props> = ({ isExpanded = false }) => {
  const indicator = useRef<HTMLDivElement>(null);
  const links = useRef<HTMLUListElement>(null);

  const getPositionOf = (el: any) => {
    const { width: itemWidth, height: itemHeight, x: itemX, y: itemY } = el.getBoundingClientRect();
    const currentWidth = itemWidth * 0.6;
    const readyX = itemX + itemWidth / 2 - currentWidth / 2;
    const readyY = itemY + itemHeight + 7;
    return { readyX, readyY, currentWidth };
  };
  const setInitialPosition = () => {
    if (links.current && indicator.current) {
      const { readyX, readyY, currentWidth } = getPositionOf(links.current.children[0]);
      gsap.set(indicator.current, { x: readyX, y: readyY, width: currentWidth });
    }
  };
  const goToThisElement = (el: any) => {
    if (links.current && indicator.current) {
      const { readyX, readyY, currentWidth } = getPositionOf(el);
      gsap.to(indicator.current, { x: readyX, y: readyY, duration: 0.8, width: currentWidth });
    }
  };
  const activateTab = (e: any) => {
    if (e.target.classList.contains('no-active')) {
      goToThisElement(e.target);
    }
  };
  const turnOn = () => {
    setInitialPosition();
    if (links.current) {
      links.current.addEventListener('click', activateTab);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 1540) turnOn();
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1540) turnOn();
    });
    return window.removeEventListener('resize', () => {
      if (window.innerWidth > 1540) turnOn();
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
