import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Header, StyledTitle, StyledSubTitle, ImageWrapper, Image, Content, InnerContent, StyledParagraph } from './AboutSection.styles';

interface props {
  title: string;
  subtitle: string;
  content: JSX.Element;
  imageSrc: string;
  sectionId?: string;
}

const AboutSection: React.FC<props> = ({ title, subtitle, content, imageSrc, sectionId }) => {
  return (
    <Wrapper id={sectionId}>
      <Header>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubTitle>{subtitle}</StyledSubTitle>
      </Header>
      <ImageWrapper>
        <Image src={imageSrc} />
      </ImageWrapper>
      <Content>
        <InnerContent>
          <StyledParagraph>{content}</StyledParagraph>
        </InnerContent>
      </Content>
    </Wrapper>
  );
};

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired
};

export default AboutSection;
