import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, BackgroundImage, StyledButton, Buttons, BeforeAnimal, Container, Disabled } from './Animal.styles';
import { Icon } from 'views/Adoption/Adoption.styles';
import { useModal } from 'hooks/useModal';
import AnimalModal from '../../organisms/AnimalModal/AnimalModal';
import AdoptModal from '../../organisms/AdoptModal/AdoptModal';

interface props {
  img: string;
  name: string;
  isDisabled?: boolean;
  type: string;
  age: number;
  description: string;
  weight: number;
  race: string;
}

const Animal: React.FC<props> = ({ img, name, isDisabled, type, age, description, weight, race }) => {
  const { openModal } = useModal();
  return (
    <Container>
      <BeforeAnimal />
      <Wrapper>
        <BackgroundImage src={img} alt={name} />
        <Buttons>
          <StyledButton
            onClick={() =>
              openModal(
                name,
                <AnimalModal description={description} weight={weight} isDisabled={isDisabled} type={type} race={race} age={age} />,
                <div>
                  {type}, lat {age}
                </div>
              )
            }
            isLight
          >
            Informacje
          </StyledButton>
          <StyledButton
            onClick={() =>
              openModal(
                `Zaadoptuj`,
                <AdoptModal animalName={name} />,
                <div>
                  {name}, lat {age}
                </div>
              )
            }
          >
            Zaadoptuj
          </StyledButton>
        </Buttons>
      </Wrapper>
      <Disabled>{isDisabled ? <Icon>!</Icon> : null}</Disabled>
    </Container>
  );
};

Animal.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Animal;
