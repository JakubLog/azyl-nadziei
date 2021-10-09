export const theme = {
  colors: {
    blueDarkenLow: 'rgba(44, 79, 236, 0.2)',
    blueDarken: '#2C4FEC',
    blueDark: '#5E6BFF',
    blue: '#8689FF',
    blueLight: '#ACA8FF',
    blueLighten: '#D1C8FF',
    blackLight: 'rgba(0, 0, 0, 70%)',
    black: '#000000',
    brown: '#422918',
    error: 'red'
  },
  shadows: {
    primary: '0 5px 15px -2px rgba(0, 0, 0, 25%)',
    text: '0 3px 10px rgba(0, 0, 0, 0.3)'
  }
};

export interface themeProps {
  isLight?: boolean;
  theme: {
    colors: {
      blueDarkenLow: string;
      blueDarken: string;
      blueDark: string;
      blue: string;
      blueLight: string;
      blueLighten: string;
      blackLight: string;
      black: string;
      brown: string;
      error: string;
    };
    shadows: {
      primary: string;
      text: string;
    };
  };
}
