import Link from 'components/atoms/Link/Link';
import Section from 'components/molecules/Section/Section';
import Hero from 'components/organisms/Hero/Hero';
import NewPet from 'components/organisms/NewPet/NewPet';
import SocialSection from 'components/organisms/SocialSection/SocialSection';
import React from 'react';
import AboutImg from 'assets/img/about.jpg';
import HelpImg from 'assets/img/help.jpg';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Section
        image={AboutImg}
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
        image={HelpImg}
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
