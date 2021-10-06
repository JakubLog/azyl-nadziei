import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledTitle, StyledSubTitle } from './SiteTitle.styles';
import { gsap, Back } from 'gsap';

interface props {
  title: string;
  subtitle: string;
}

const SiteTitle: React.FC<props> = ({ title, subtitle }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.innerWidth > 750) {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from(titleRef.current, { opacity: 0, y: 10, duration: 1.5, ease: Back.easeOut.config(7) }).from(
        subtitleRef.current,
        {
          opacity: 0,
          duration: 2
        },
        '-=1.5'
      );
    }
  }, []);

  return (
    <Wrapper>
      <StyledTitle ref={titleRef}>{title}</StyledTitle>
      <StyledSubTitle ref={subtitleRef}>{subtitle}</StyledSubTitle>
    </Wrapper>
  );
};

SiteTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default SiteTitle;
