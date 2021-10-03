import React from 'react';
import { InfoSection, Wrapper, Image, GoodByeText, Informations, CatImage, SocialLinks } from './Footer.styles';
import Logo from 'assets/img/footer.svg';
import Cat from 'assets/img/cat.svg';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  EmailIcon,
  EmailShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';

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
          <SocialLinks>
            <FacebookShareButton url={window.location.href}>
              <FacebookIcon round />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href}>
              <TwitterIcon round />
            </TwitterShareButton>
            <LinkedinShareButton url={window.location.href}>
              <LinkedinIcon round />
            </LinkedinShareButton>
            <WhatsappShareButton url={window.location.href}>
              <WhatsappIcon round />
            </WhatsappShareButton>
            <EmailShareButton url={window.location.href}>
              <EmailIcon round />
            </EmailShareButton>
          </SocialLinks>
        </Informations>
      </InfoSection>
      <CatImage src={Cat} />
    </Wrapper>
  );
};

export default Footer;
