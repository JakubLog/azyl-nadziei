export const theme = {
  colors: {
    blueDarken: '#2C4FEC',
    blueDark: '#5E6BFF',
    blue: '#8689FF',
    blueLight: '#ACA8FF',
    blueLighten: '#D1C8FF',
    blackLight: 'rgba(0, 0, 0, 70%)'
  },
  shadows: {
    primary: '0 5px 15px -7px #000000'
  }
};

export interface themeProps {
  theme: {
    colors: {
      blueDarken: string;
      blueDark: string;
      blue: string;
      blueLight: string;
      blueLighten: string;
      blackLight: string;
    };
    shadows: {
      primary: string;
    };
  };
}
