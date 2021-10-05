import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
  & > * {
    &:not(:last-child) {
      margin-bottom: 15px;
      @media (min-width: 768px) {
        margin-bottom: 45px;
      }
    }
  }
  @media (min-width: 768px) {
    margin-top: 60px;
  }
`;
