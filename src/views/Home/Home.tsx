import { Link } from 'components/atoms/Link/Link';
import Loading from 'components/molecules/Loading/Loading';
import Section from 'components/molecules/Section/Section';
import Hero from 'components/organisms/Hero/Hero';
import NewPet from 'components/organisms/NewPet/NewPet';
import SocialSection from 'components/organisms/SocialSection/SocialSection';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Section
        image="https://picsum.photos/500"
        title="Trochę o nas..."
        subtitle="Chcemy aby każde zwierzę miało kochającą rodzinę."
        content={
          <>
            Jesteśmy <Link to="/about">transparentną organizacją non-profit</Link> z Opola która kocha pomagać zwierzętom w potrzebie. Działamy już od
            2007 roku ratując życia!
          </>
        }
        direction="left"
        buttonContent={[
          { content: 'Czytaj więcej', to: '/about' },
          { content: 'Sprawozdania', to: '/about#sprawozdania' }
        ]}
      />
      <NewPet />
      <Section
        image="https://picsum.photos/500"
        title="Chciałbyś pomóc?"
        subtitle="Jeżeli chcesz nam pomóc lub rozpocząć współpracę,
        odwiedź naszą specjalną podstronę."
        direction="right"
        buttonContent={{ content: 'Chcę pomóc!', to: '/help' }}
      />
      <SocialSection />
    </div>
  );
};

export default Home;
