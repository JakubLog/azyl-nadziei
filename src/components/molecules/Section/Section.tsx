import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, ImageWrapper, Image, BeforeImage, StyledSubTitle, StyledContent, Buttons } from './Section.styles';
import { useHistory } from 'react-router-dom';
import { links, indicator } from 'components/molecules/Navigation/Navigation';
import { useMenu } from 'hooks/useMenu';

interface props {
  direction: string;
  image?: string;
  title: string;
  subtitle: string;
  content?: JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buttonContent: any;
}

const Section: React.FC<props> = ({ direction, image, title, subtitle, content, buttonContent }) => {
  const history = useHistory();
  const { turnOn } = useMenu();

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
      <Buttons>
        {buttonContent?.to ? (
          <Button
            onClick={() => {
              history.push(buttonContent.to);
              turnOn(links, indicator, 2000);
            }}
          >
            {buttonContent.content}
          </Button>
        ) : (
          buttonContent.map(({ content, to }: { content: string; to: string }) => (
            <Button
              onClick={() => {
                history.push(to);
                turnOn(links, indicator, 2000);
              }}
            >
              {content}
            </Button>
          ))
        )}
      </Buttons>
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
