import React from 'react';
import { Wrapper, Image } from './Hero.styles';
import Dog from 'assets/img/dog.jpg';
import { Title } from 'components/atoms/Title/Title';
import { SubTitle } from 'components/atoms/SubTitle/SubTitle';
import { Content } from 'components/atoms/Content/Content';
import { Button } from 'components/atoms/Button/Button';
import { useHistory } from 'react-router';

const Hero: React.FC = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Image src={Dog} />
      <Title>
        Ratujemy zwierzęta <br /> w potrzebie
      </Title>
      <SubTitle>Kochasz zwierzątka? To miejsce dla ciebie!</SubTitle>
      <Content>
        Zerknij na członków naszej rodziny i jeżeli to możliwe przygarnij <br /> kogoś do swojego domu!
      </Content>
      <Button onClick={() => history.push('/adoption')}>Zobacz naszą rodzinę</Button>
    </Wrapper>
  );
};

export default Hero;
