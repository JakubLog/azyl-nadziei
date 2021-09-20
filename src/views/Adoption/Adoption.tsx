import React from 'react';
import { Wrapper, InfoWrapper, Icon, Content } from './Adoption.styles';
import SiteTitle from 'components/molecules/SiteTitle/SiteTitle';

const Adoption: React.FC = () => {
  return (
    <Wrapper>
      <SiteTitle title="Nasi podopieczni" subtitle="Zwierzęta potrzebujące kochających domów i pomocy ludzI." />
      <InfoWrapper>
        <Icon>!</Icon>
        <Content> - zwierzę tylko do adopcji online!</Content>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Adoption;
