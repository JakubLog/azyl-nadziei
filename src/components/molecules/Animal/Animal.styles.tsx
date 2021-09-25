import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { themeProps } from 'assets/css/theme';

export const Container = styled.div`
  width: 100%;
  position: relative;
  height: 250px;
`;
export const BeforeAnimal = styled.div`
  width: 380px;
  position: absolute;
  right: -8px;
  bottom: -8px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }: themeProps) => theme.colors.blueDark};
  border-radius: 10px;
  opacity: 0.2;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
`;
export const BackgroundImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
export const StyledButton = styled(Button)`
  padding: 0;
  height: 50px;
  border-radius: 0;
  min-width: 50%;
  opacity: 0.8;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
export const Buttons = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
`;
export const Disabled = styled.div`
  position: absolute;
  left: -12px;
  top: -12px;
`;
