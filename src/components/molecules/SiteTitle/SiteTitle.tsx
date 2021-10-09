import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledTitle, StyledSubTitle } from './SiteTitle.styles';

interface props {
  title: string;
  subtitle: string;
}

const SiteTitle: React.FC<props> = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subtitle}</StyledSubTitle>
    </Wrapper>
  );
};

SiteTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default SiteTitle;
