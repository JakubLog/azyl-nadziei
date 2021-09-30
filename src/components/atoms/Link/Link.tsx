import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { LinkBlock } from './Link.styles';
import { useMenu } from 'hooks/useMenu';
import { indicator, links } from 'components/molecules/Navigation/Navigation';

interface props {
  to: string;
}

const Link: React.FC<props> = ({ children, to }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { turnOn } = useMenu();

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.addEventListener('click', () => {
        turnOn(links, indicator, 2000);
      });
    }
  }, []);

  return (
    <LinkBlock to={to} ref={linkRef}>
      {children}
    </LinkBlock>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired
};

export default Link;
