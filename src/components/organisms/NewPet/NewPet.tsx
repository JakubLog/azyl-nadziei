import React from 'react';
import { useQuery } from 'graphql-hooks';
import Link from 'components/atoms/Link/Link';
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
  StyledLink
} from './NewPet.styles';
import Loading from 'components/molecules/Loading/Loading';

const NewPet: React.FC = () => {
  const query = `{allAnimals(first: 1) {id,name,description,image{url}}}`;
  const { data, loading, error } = useQuery(query);

  if (error) {
    return (
      <Wrapper>
        <Header>
          <StyledTitle>Zaadoptuj mnie!</StyledTitle>
          <StyledSubTitle>
            Poniżej znajduje się nasz najnowszy podopieczny, lecz <Link to="/adoption">jest ich więcej</Link>.
          </StyledSubTitle>
        </Header>
        <ContainerPositioner>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Container>
              <BackgroundImage src="https://picsum.photos/1000" />
              <Description>
                <ContentWrapper>
                  <DescriptionTitle>Error {error?.httpError}</DescriptionTitle>
                  <StyledContent>Prosimy o skontaktowanie się z właścicielem serwisu w celu przekazania problemu developer'owi.</StyledContent>
                </ContentWrapper>
                <StyledLink>Zgłoś błąd</StyledLink>
              </Description>
            </Container>
          )}
        </ContainerPositioner>
      </Wrapper>
    );
  }

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
          {loading ? (
            <Loading />
          ) : (
            <>
              <BackgroundImage src={data.allAnimals[0].image.url} />
              <Description>
                <ContentWrapper>
                  <DescriptionTitle>{data.allAnimals[0].name}</DescriptionTitle>
                  <StyledContent>{data.allAnimals[0].description}</StyledContent>
                </ContentWrapper>
                <StyledLink>
                  <Link to="adoption">Czytaj więcej</Link>
                </StyledLink>
              </Description>
            </>
          )}
        </Container>
      </ContainerPositioner>
    </Wrapper>
  );
};

export default NewPet;
