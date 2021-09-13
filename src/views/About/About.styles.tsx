import styled from 'styled-components';

export const Wrapper = styled.div`
  & > * {
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
`;

export const StyledLink = styled.a`
  color: black;
`;
