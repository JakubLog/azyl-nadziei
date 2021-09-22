import React from 'react';
import { BackgroundColor, Wrapper, Buttons, Content, StyledTitle, StyledButton, RightCorner } from './Modal.styles';

interface buttonProps {
  text: string;
  onClick: () => void;
}

interface props {
  title: string;
  content: JSX.Element;
  buttons?: buttonProps[];
  rightCorner: JSX.Element;
}

const Modal: React.FC<props> = ({ title, content, buttons = [{ text: 'Wyjdź', onClick: () => alert('klozet') }], rightCorner }) => {
  return (
    <>
      <BackgroundColor />
      <Wrapper>
        <StyledTitle>{title}</StyledTitle>
        <Content>{content}</Content>
        <Buttons>
          {buttons.map((button, i) => (
            <StyledButton onClick={button.onClick} isLight={i % 2 === 0 ? false : true}>
              {button.text}
            </StyledButton>
          ))}
        </Buttons>
        <RightCorner>{rightCorner}</RightCorner>
      </Wrapper>
    </>
  );
};

export default Modal;
