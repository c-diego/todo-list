import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
      border: string;
      textContrast: string;
    };
    typography: {
      fontFamily: {
        heading: string;
        body: string;
      };
      lineHeight: string | number;
      fontSize: {
        xSmall: string;
        small: string;
        medium: string;
        large: string;
        xLarge: string;
      };
      fontWeight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
    };
    spacing: {
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
    borders: {
      borderRadius: string;
      borderWidth: string;
    };
    shadows: {
      light: string;
      medium: string;
      heavy: string;
    };
    transitions: {
      short: string;
      medium: string;
      long: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
