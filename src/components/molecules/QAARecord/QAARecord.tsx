import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Answer } from 'components/atoms/Answer/Answer';
import { Question } from 'components/atoms/Question/Question';
import { Wrapper } from './QAARecord.styles';

interface props {
  question: string;
  answer: string;
}

const QAARecord: React.FC<props> = ({ question, answer }) => {
  const [isActive, setActiveClass] = useState(false);
  return (
    <Wrapper>
      <Question onClick={() => setActiveClass((prev) => !prev)}>{question}</Question>
      <Answer>
        <p className={isActive ? 'active' : 'inactive'}>{answer}</p>
      </Answer>
    </Wrapper>
  );
};

QAARecord.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default QAARecord;
