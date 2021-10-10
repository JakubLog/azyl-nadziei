import React, { useEffect, useState } from 'react';
import AboutSection from 'components/molecules/AboutSection/AboutSection';
import { Wrapper, StyledLink } from './About.styles';
import { useQuery } from 'graphql-hooks';
import { useError } from 'hooks/useError';

const query = `{allReports {year,file {url}}}`;
const errMessage = 'Sorry, something went wrong! Please try again or contact with support.';

const About: React.FC = () => {
  const { data, loading, error } = useQuery(query);
  const { dispatchError } = useError();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    if (error) dispatchError(errMessage);
    else if (!loading) {
      setReports(data.allReports);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error]);
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
          <>
            {loading ? (
              <p>Loading...</p>
            ) : reports.length !== 0 ? (
              reports.map(({ year, file: { url } }: { year: string; file: { url: string } }) => (
                <ul>
                  <li>
                    <b>Sprawozdanie za rok {year} </b> |{' '}
                    <StyledLink target="_blank" href={url}>
                      Sprawdź tutaj
                    </StyledLink>
                  </li>
                </ul>
              ))
            ) : (
              <p>Obecnie nie ma tutaj żadnych sprawozdań!</p>
            )}
          </>
        }
        imageSrc="https://picsum.photos/500"
      />
    </Wrapper>
  );
};

export default About;
