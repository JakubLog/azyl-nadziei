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
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #ddd;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }: themeProps) => theme.colors.blueDark};
        border-radius:10px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`;
