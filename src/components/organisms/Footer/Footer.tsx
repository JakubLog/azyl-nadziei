import React from 'react';
import { InfoSection, Wrapper, Image, GoodByeText, Informations, CatImage } from './Footer.styles';
import Logo from 'assets/img/footer.svg';
import Cat from 'assets/img/cat.svg';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <InfoSection>
        <Image src={Logo} />
        <GoodByeText>
          Dziękujemy za odwiedziny! Jeżeli któryś z naszych podopiecznych ciebie ujął - skontaktuj się z nami. I jeżeli możemy prosić, powiedz o nas
          swoim bliskim. Dziękujemy.
        </GoodByeText>
        <Informations>
          <div>azylnadziei.pl &copy; 2007 - 2021</div>
          <div>Social icons</div>
        </Informations>
      </InfoSection>
      <CatImage src={Cat} />
    </Wrapper>
  );
};

export default Footer;
