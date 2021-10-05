import QAARecord from 'components/molecules/QAARecord/QAARecord';
import React from 'react';
import { Wrapper } from './QAA.styles';

const QAA: React.FC = () => {
  return (
    <Wrapper>
      <QAARecord
        question="Numer telefonu 📞"
        answer="Jeżeli chcesz z nami porozmawiać o adopcji poprzez telefoniczną wymianę informacji, to znajdziesz nas pod numerem: +48 665 135 666"
      />
      <QAARecord
        question="Poczta elektroniczna (e-mail) 📧"
        answer="Jeżeli chesz do nas napisać z pytaniem, prośbą o dodatkowe informacje lub cokolwiek innego, to pisz tutaj: azylnadziei@gmail.com"
      />
      <QAARecord question="Adres fundacji 🏠" answer="Nasza fundacja znajduje się w Opolu (45-312) na ul. Warszawskiej 10/1." />
      <QAARecord
        question="Numer konta bankowego 🏦"
        answer="Jeżeli chesz nas wspomóc materialnie, możesz zrealizować przelew na konto bankowe naszej fundacji: PKO BP 18 1020 3668
        0000 5202 0177 6103"
      />
    </Wrapper>
  );
};

export default QAA;
