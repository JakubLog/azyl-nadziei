import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, ImageWrapper, Image, BeforeImage, StyledSubTitle, StyledContent, Buttons } from './Section.styles';
interface props {
  direction: string;
  image?: string;
  title: string;
  subtitle: string;
  content: JSX.Element;
  buttonContent: string[] | string;
}

const Section: React.FC<props> = ({ direction, image, title, subtitle, content, buttonContent }) => {
  return (
    <Wrapper direction={direction}>
      {image && (
        <ImageWrapper direction={direction}>
          <Image src={image} />
          <BeforeImage />
        </ImageWrapper>
      )}
      <Title>{title}</Title>
      <StyledSubTitle>{subtitle}</StyledSubTitle>
      <StyledContent>{content}</StyledContent>
      <Buttons>{typeof buttonContent === 'string' ? <Button>{buttonContent}</Button> : buttonContent.map((txt) => <Button>{txt}</Button>)}</Buttons>
    </Wrapper>
  );
};

Section.propTypes = {
  direction: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonContent: PropTypes.array.isRequired
};

export default Section;
