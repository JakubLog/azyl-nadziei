import QAARecord from 'components/molecules/QAARecord/QAARecord';
import React from 'react';
import { Wrapper } from './QAA.styles';

const QAA: React.FC = () => {
  return (
    <Wrapper>
      <QAARecord question="Dokąd nocą tupta jeż?" answer="Nie wiem i nie interesuje mnie to, gdzie nocą tupta jeż ziomek!" />
    </Wrapper>
  );
};

export default QAA;
