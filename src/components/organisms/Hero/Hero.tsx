import React, { useRef, useEffect } from 'react';
import { Wrapper, Image, StyledContent } from './Hero.styles';
import Dog from 'assets/img/dog.jpg';
import { Title } from 'components/atoms/Title/Title';
import { SubTitle } from 'components/atoms/SubTitle/SubTitle';
import { Button } from 'components/atoms/Button/Button';
import { useHistory } from 'react-router';
import { useMenu } from 'hooks/useMenu';
import { links, indicator } from 'components/molecules/Navigation/Navigation';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const history = useHistory();
  const { turnOn } = useMenu();

  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLHeadingElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const content = useRef<HTMLParagraphElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (window.innerWidth > 750) {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from(image.current, { opacity: 0, duration: 2 })
        .from(title.current, { opacity: 0, duration: 1, y: 10 })
        .addLabel('text')
        .from(subtitle.current, { opacity: 0, duration: 0.7, x: 20 })
        .from(content.current, { opacity: 0, duration: 0.7, x: -20 }, 'text')
        .from(button.current, { opacity: 0, y: 30, duration: 1.5 });
    }
  }, []);

  return (
    <Wrapper>
      <Image src={Dog} ref={image} />
      <Title ref={title}>
        Ratujemy zwierzęta <br /> w potrzebie
      </Title>
      <SubTitle ref={subtitle}>Kochasz zwierzątka? To miejsce dla ciebie!</SubTitle>
      <StyledContent ref={content}>Zerknij na członków naszej rodziny i jeżeli to możliwe przygarnij kogoś do swojego domu!</StyledContent>
      <Button
        onClick={() => {
          history.push('/adoption');
          turnOn(links, indicator, 1000);
        }}
        ref={button}
      >
        Zobacz naszą rodzinę
      </Button>
    </Wrapper>
  );
};

export default Hero;
