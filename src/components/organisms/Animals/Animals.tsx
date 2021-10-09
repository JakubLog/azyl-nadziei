import axios from 'axios';
import Animal from 'components/molecules/Animal/Animal';
import Loading from 'components/molecules/Loading/Loading';
import { useError } from 'hooks/useError';
import React, { useEffect, useState } from 'react';
import { Wrapper, StyledTitle } from './Animals.styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setCookie = (name: string, value: any, days: number) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};
const getCookie = (name: string) => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

interface AnimalType {
  name: string;
  id: string;
  disabled: boolean;
  image: {
    url: string;
  };
  typeofanimal: string;
  age: number;
  weight: number;
  breed: string;
  description: string;
}

const Animals: React.FC = () => {
  const { dispatchError } = useError();
  const [loading, setLoadingState] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animals, setAnimals] = useState<any>([]);

  useEffect(() => {
    const cookie = getCookie('animals');
    if (cookie) {
      const preparedCookie = JSON.parse(cookie);
      setAnimals(preparedCookie);
      setLoadingState(false);
    } else {
      try {
        axios
          .post(
            'https://graphql.datocms.com/',
            { query: `{allAnimals{id,name,disabled,age,typeofanimal,image{url},breed,weight,description}}` },
            { headers: { Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}` } }
          )
          .then(
            ({
              data: {
                data: { allAnimals }
              }
            }) => {
              setAnimals(allAnimals);
              setCookie('animals', JSON.stringify(allAnimals), 7);
              setLoadingState(false);
            }
          );
      } catch (e) {
        // console.error(e);
        dispatchError('Something went wrong with getting Animals. Please contact with Support!');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Loading fullView />
      ) : animals.length > 0 ? (
        animals.map(({ name, id, disabled, image: { url: imgUrl }, typeofanimal: type, age, weight, breed, description }: AnimalType) => (
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
        ))
      ) : (
        <StyledTitle>Brak potrzebujących domów zwierząt! 🥳</StyledTitle>
      )}
    </Wrapper>
  );
};

export default Animals;
