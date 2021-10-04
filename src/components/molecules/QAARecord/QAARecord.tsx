import React from 'react';
import PropTypes from 'prop-types';
import { Answer } from 'components/atoms/Answer/Answer';
import { Question } from 'components/atoms/Question/Question';
import { Wrapper } from './QAARecord.styles';

interface props {
  question: string;
  answer: string;
}

const QAARecord: React.FC<props> = ({ question, answer }) => {
  return (
    <Wrapper>
      <Question>{question}</Question>
      <Answer>
        <p>{answer}</p>
      </Answer>
    </Wrapper>
  );
};

QAARecord.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default QAARecord;
