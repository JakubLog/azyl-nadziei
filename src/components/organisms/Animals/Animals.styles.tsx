import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, 340px);
  grid-template-rows: auto;
  padding-inline: 100px;
  margin-top: 60px;
  justify-content: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 380px);
  }
`;

export const StyledTitle = styled(Title)`
  position: absolute;
  top: 20px;
  left: 50%;
  color: black;
  font-size: 20px;
  text-align: center;
  transform: translate(-50%, -50%);
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100px;
    background-color: #eee;
    z-index: -1;
    box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  }
  @media (min-width: 768px) {
    font-size: 40px;
    top: 90px;
    &::before {
      height: 200px;
    }
  }
`;
