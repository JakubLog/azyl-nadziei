import styled from 'styled-components';

export const Question = styled.summary`
  cursor: pointer;
  font-size: 20px;
  list-style-type: none;
  letter-spacing: 1px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 30px;
    text-align: left;
  }
`;
