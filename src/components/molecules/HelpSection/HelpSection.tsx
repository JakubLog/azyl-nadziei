import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Headers, StyledTitle, StyledSubTitle, Content, StyledParagraph } from './HelpSection.styles';

interface props {
  title: string;
  subtitle: string;
  content: JSX.Element;
}

const HelpSection: React.FC<props> = ({ title, subtitle, content }) => {
  return (
    <Wrapper>
      <Headers>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubTitle>{subtitle}</StyledSubTitle>
      </Headers>
      <Content>
        <StyledParagraph>{content}</StyledParagraph>
      </Content>
    </Wrapper>
  );
};

HelpSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired
};

export default HelpSection;
