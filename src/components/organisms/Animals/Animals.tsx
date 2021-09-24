import Animal from 'components/molecules/Animal/Animal';
import { useQuery } from 'graphql-hooks';
import { useError } from 'hooks/useError';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './Animals.styles';

const Animals: React.FC = () => {
  const { dispatchError } = useError();
  const { loading, data, error } = useQuery(`{allAnimals{id,name,disabled,age,typeofanimal,image{url},breed,weight,description}}`);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    try {
      if (error) throw new Error(`Error from Animals query.`);
      else if (!loading) {
        const { allAnimals } = data;
        setAnimals(allAnimals);
      }
    } catch (e) {
      // console.error(e);
      dispatchError('Something went wrong with getting Animals. Please contact with Support!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error]);

  return (
    <Wrapper>
      {animals.map(({ name, id, disabled, image: { url: imgUrl }, typeofanimal: type, age, weight, breed, description }) => (
        <Animal
          key={id}
          description={description}
          img={imgUrl}
          name={name}
          race={breed}
          weight={weight}
          type={type}
          age={age}
          isDisabled={disabled}
        />
      ))}
    </Wrapper>
  );
};

export default Animals;
