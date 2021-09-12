import React from 'react';
import { useQuery } from 'graphql-hooks';
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
import { useHistory } from 'react-router-dom';
import Loading from 'components/molecules/Loading/Loading';

const NewPet: React.FC = () => {
  const query = `{allAnimals(first: 1) {id,name,description,image{url}}}`;
  const { data, loading, error } = useQuery(query);

  const history = useHistory();

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
                <StyledButton>Zgłoś błąd</StyledButton>
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
                <StyledButton onClick={() => history.push('/adoption')}>Czytaj więcej</StyledButton>
              </Description>
            </>
          )}
        </Container>
      </ContainerPositioner>
    </Wrapper>
  );
};

export default NewPet;
