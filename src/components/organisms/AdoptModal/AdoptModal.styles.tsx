import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { StateValue } from 'xstate';
import { LoadingIcon } from 'components/atoms/LoadingIcon/LoadingIcon';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  flex-direction: column;
  input {
    margin-bottom: 10px;
  }
`;

export const StyledButton = styled(Button)<{ state: StateValue }>`
  ${({ state }) =>
    state === 'loading' || state === 'success'
      ? `
        opacity: 0.6;
        pointer-events: none;
        cursor: default;
        &:focus {
          opacity: 0.6;
        }
      `
      : null}
  font-size: 18px;
`;

export const Information = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 30px;
  background-color: ${({ theme }: themeProps) => theme.colors.blueDark};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  font-size: 14px;
  text-align: center;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledLoadingIcon = styled(LoadingIcon)`
  margin-left: 3px;
  width: 30px;
  height: 30px;
  &::before,
  &::after {
    background-color: ${({ theme }: themeProps) => theme.colors.blueDark};
  }
  &::after {
    width: 60%;
    height: 60%;
  }
`;
