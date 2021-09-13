import React from 'react';
import AboutSection from 'components/molecules/AboutSection/AboutSection';
import { Wrapper, StyledLink } from './About.styles';

const About: React.FC = () => {
  return (
    <Wrapper>
      <AboutSection
        sectionId="about"
        title="O naszej fundacji"
        subtitle="Fundacja Azyl Nadziei"
        content={
          <>
            Fundacja Azyl Nadziei powstała w Opolu w 2007 roku. Naszym głównym zadaniem jest pomoc porzuconym, chorym, pokrzywdzonym przez los
            czworonogów oraz znalezienie im nowych, odpowiedzialnych, kochających domów. Zanim jednak to nastąpi, zwierzęta wymagają często
            długotrawałego leczenia, czasami rehabilitacji oraz socjalizacji. Po zakończonym leczeniu zwierzęta są kastrowane i szczepione. Fundacja
            Azyl Nadziei aktywnie pomaga finansując lub dofinansowując kastracje czworonogów, ponieważ uważamy, że tylko kastracja może powstrzymać
            problem bezdomności zwierząt. Staramy się uświadamiać społeczeństwo o potrzebach zwierząt ich prawach i obowiązkach wobec nich. Pragniemy,
            aby wszystkie psy i koty były prawidłowo zaopiekowane, zadbane i nigdy nie stały się bezdomnymi.
          </>
        }
        imageSrc="https://picsum.photos/500"
      />
      <AboutSection
        sectionId="sprawozdania"
        title="Sprawozdania"
        subtitle="Fundacja Azyl Nadziei"
        content={
          <ul>
            <li>
              <b>Sprawozdanie za rok 2020</b> | <StyledLink href="#">Sprawdź tutaj</StyledLink>
            </li>
            <li>
              <b>Sprawozdanie za rok 2019</b> | <StyledLink href="#">Sprawdź tutaj</StyledLink>
            </li>
            <li>
              <b>Sprawozdanie za rok 2018</b> | <StyledLink href="#">Sprawdź tutaj</StyledLink>
            </li>
            <li>
              <b>Sprawozdanie za rok 2017</b> | <StyledLink href="#">Sprawdź tutaj</StyledLink>
            </li>
          </ul>
        }
        imageSrc="https://picsum.photos/500"
      />
    </Wrapper>
  );
};

export default About;
