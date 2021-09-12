import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { SubTitle } from 'components/atoms/SubTitle/SubTitle';

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Section = styled.div`
  padding-inline: 30px;
  &:not(:first-child) {
    margin-top: 60px;
  }
`;
export const Sections = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
    #socials {
      grid-column: 1/4;
      grid-row: 1;
    }
    #contact {
      grid-column: 2/5;
      grid-row: 2;
    }
  }
`;

export const StyledSubTitle = styled(SubTitle)`
  margin-top: -10px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 15px;
  }
  @media (min-width: 1100px) {
    width: 80%;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Social = styled.a<{ color?: string }>`
  width: 150px;
  height: 150px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  background-color: ${({ color }) => (color ? color : 'grey')};
  margin: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  text-decoration: none;
  opacity: 0.6;
  transition: opacity 0.3s linear;
  &:hover,
  &:focus {
    opacity: 1;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
