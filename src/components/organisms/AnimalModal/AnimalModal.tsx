import { InlineTitle } from 'components/atoms/InlineTitle/InlineTitle';
import React from 'react';
import { AboutParagraph, List, Information } from './AnimalModal.styles';

interface props {
  description: string;
  type: string;
  race: string;
  age: number;
  weight: number;
  isDisabled?: boolean;
}

const AnimalModal: React.FC<props> = ({ description, type, race, age, weight, isDisabled }) => {
  return (
    <div>
      {isDisabled && <Information>Uwaga! W tym przypadku możliwa jest jedynie adopcja wirtualna.</Information>}
      <InlineTitle isDisabled={isDisabled}>Informacje</InlineTitle>
      <List>
        <dt>Gatunek:</dt>
        <dd>{type}</dd>
        <dt>Rasa:</dt>
        <dd>{race}</dd>
        <dt>Wiek:</dt>
        <dd>{age} lat(a)</dd>
        <dt>Waga:</dt>
        <dd>{weight} kg</dd>
        <dt>Czy niepełnosprawny?</dt>
        <dd>{isDisabled ? 'Tak' : 'Nie'}</dd>
      </List>
      <InlineTitle>O pupilu</InlineTitle>
      <AboutParagraph>{description}</AboutParagraph>
    </div>
  );
};

export default AnimalModal;
