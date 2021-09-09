import React from 'react';
import { Link } from 'components/atoms/Link/Link';
import {
  Wrapper,
  Header,
  StyledTitle,
  StyledSubTitle,
  ContainerPositioner,
  Container,
  BackgroundImage,
  Description,
  DescriptionTitle,
  ContentWrapper,
  StyledContent,
  StyledButton
} from './NewPet.styles';

const NewPet: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <StyledTitle>Zaadoptuj mnie!</StyledTitle>
        <StyledSubTitle>
          Poniżej znajduje się nasz najnowszy podopieczny, lecz <Link to="/adoption">jest ich więcej</Link>.
        </StyledSubTitle>
      </Header>
      <ContainerPositioner>
        <Container>
          <BackgroundImage src="https://picsum.photos/2000" />
          <Description>
            <ContentWrapper>
              <DescriptionTitle>Migdał</DescriptionTitle>
              <StyledContent>
                Migdał, czyli biało-rudy, przesympatyczny młody kot który kocha ludzi i jest otwarty na kontakt z nimi, toleruje on inne koty i psy.
                Jest odważny, ale nienamolny. Wykastrowany i zaszczepiony, gotowy do adopcji. Wypatruje kochającego, niewychodzącego domu.
              </StyledContent>
            </ContentWrapper>
            <StyledButton>Czytaj więcej</StyledButton>
          </Description>
        </Container>
      </ContainerPositioner>
    </Wrapper>
  );
};

export default NewPet;
