import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content, ErrorTitle, StyledParagraph } from './Error.styles';

interface props {
  message?: string;
}

const defaultMessage = 'Something went wrong! Please try again or contact with us!';

const Error: React.FC<props> = ({ message = defaultMessage }) => {
  return (
    <Wrapper>
      <ErrorTitle>Ooops!</ErrorTitle>
      <Content>
        <StyledParagraph>{message}</StyledParagraph>
      </Content>
    </Wrapper>
  );
};

Error.propTypes = {
  message: PropTypes.string
};

export default Error;
