import React from 'react';
import { Wrapper, Sections, Section, StyledSubTitle, Socials, Social } from './SocialSection.styles';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { useHistory } from 'react-router-dom';
import FBIcon from 'assets/img/facebook.jpg';
import IGIcon from 'assets/img/instagram.png';

const SocialSection: React.FC = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Sections>
        <Section id="socials">
          <Title>Social Media</Title>
          <StyledSubTitle>Jeżeli chcesz nas śledzić w internecie to mamy dobre wieści! Sprawdź ikonki poniżej!</StyledSubTitle>
          <Socials>
            <Social href="#" target="_blank" color="#1877F2">
              <img src={FBIcon} alt="Facebook Icon" />
            </Social>
            <Social href="#" target="_blank" color="#F00073">
              <img src={IGIcon} alt="Instagram Icon" />
            </Social>
          </Socials>
        </Section>
        <Section id="contact">
          <Title>Kontakt</Title>
          <StyledSubTitle>Chcesz omówić adopcję? Masz dodatkowe pytania? Jesteśmy do twojej dyspozycji!</StyledSubTitle>
          <Button onClick={() => history.push('/contact')}>Skontaktuj się</Button>
        </Section>
      </Sections>
    </Wrapper>
  );
};

export default SocialSection;
