import Animal from 'components/molecules/Animal/Animal';
import React from 'react';
import { Wrapper } from './Animals.styles';

const Animals: React.FC = () => {
  return (
    <Wrapper>
      <Animal img="https://picsum.photos/500" name="Gwizdek" />
      <Animal img="https://picsum.photos/500" name="Gwizdek" isDisabled />
      <Animal img="https://picsum.photos/500" name="Gwizdek" />
      <Animal img="https://picsum.photos/500" name="Gwizdek" />
      <Animal img="https://picsum.photos/500" name="Gwizdek" />
      <Animal img="https://picsum.photos/500" name="Gwizdek" />
      <Animal img="https://picsum.photos/500" name="Gwizdek" />
      <Animal img="https://picsum.photos/500" name="Gwizdek" />
      <Animal img="https://picsum.photos/500" name="Gwizdek" />
      <Animal img="https://picsum.photos/500" name="Gwizdek" />
    </Wrapper>
  );
};

export default Animals;
