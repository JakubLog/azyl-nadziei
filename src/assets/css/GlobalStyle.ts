import { createGlobalStyle } from 'styled-components';
import { themeProps } from './theme';

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }
    html {
        font-family: Roboto, sans-serif;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        color: ${({ theme }: themeProps) => theme.colors.blueDarken};
    }
`;
