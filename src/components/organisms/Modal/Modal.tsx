import { useModal } from 'hooks/useModal';
import React from 'react';
import ReactDOM from 'react-dom';
import { BackgroundColor, Wrapper, Buttons, Content, StyledTitle, StyledButton, RightCorner } from './Modal.styles';

const Modal: React.FC = () => {
  const { closeModal, modal } = useModal();

  return ReactDOM.createPortal(
    <>
      <BackgroundColor />
      <Wrapper>
        <StyledTitle>{modal.title}</StyledTitle>
        <Content>{modal.content}</Content>
        <Buttons>
          <StyledButton onClick={closeModal}>Wyjdź</StyledButton>
        </Buttons>
        <RightCorner>{modal.rightCorner}</RightCorner>
      </Wrapper>
    </>,
    document.body
  );
};

export default Modal;
