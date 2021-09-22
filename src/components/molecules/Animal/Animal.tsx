import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, BackgroundImage, StyledButton, Buttons, BeforeAnimal, Container, Disabled } from './Animal.styles';
import { Icon } from 'views/Adoption/Adoption.styles';
import { useModal } from 'hooks/useModal';

interface props {
  img: string;
  name: string;
  isDisabled?: boolean;
}

const Animal: React.FC<props> = ({ img, name, isDisabled }) => {
  const { openModal } = useModal();
  return (
    <Container>
      <BeforeAnimal />
      <Wrapper>
        <BackgroundImage src={img} alt={name} />
        <Buttons>
          <StyledButton onClick={() => openModal(name, <div>Ola Boga!</div>, <div>Kotek, lat 10</div>)} isLight>
            Informacje
          </StyledButton>
          <StyledButton>Zaadoptuj</StyledButton>
        </Buttons>
      </Wrapper>
      <Disabled>{isDisabled ? <Icon>!</Icon> : null}</Disabled>
    </Container>
  );
};

Animal.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool
};

export default Animal;
