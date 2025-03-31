import type { Theme } from '@emotion/react';
import chroma from 'chroma-js';

export const lightTheme: Theme = {
  colors: {
    primary: '#9b59b6', // Purple
    secondary: '#f39c12', // Orange
    background: chroma('#9b59b6').luminance(0.9).hex(),
    text: '#2c3e50', // Dark gray text
    success: '#27ae60', // Fresh green
    danger: '#e74c3c', // Red
    warning: '#f1c40f', // Bright yellow
    info: '#3498db', // Blue for information
    border: '#e1e1e1', // Very light gray border
    textContrast: '#ffffff', // White text on dark elements
  },
  typography: {
    fontFamily: {
      heading: 'Roboto, sans-serif',
      body: 'Arial, sans-serif',
    },
    lineHeight: '1.6',
    fontSize: {
      xSmall: '.700rem',
      small: '.775rem',
      medium: '.875rem',
      large: '1.2rem',
      xLarge: '1.5rem',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 600,
    },
  },
  spacing: {
    xSmall: '0.1rem',
    small: '0.3rem',
    medium: '0.5rem',
    large: '1.5rem',
    xLarge: '2rem',
  },
  borders: {
    borderRadius: '10px',
    borderWidth: '1px',
  },
  shadows: {
    light: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)',
    medium: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)',
    heavy: '0 0.375rem 0.75rem rgba(0, 0, 0, 0.3)',
  },
  transitions: {
    short: '0.3s ease-in-out',
    medium: '0.6s ease-in-out',
    long: '1s ease-in-out',
  },
  breakpoints: {
    xs: '400px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
};

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    primary: '#9b59b6', // Purple
    secondary: '#f39c12', // Orange
    background: '#181824', // Dark background
    text: '#ecf0f1', // Light text for readability
    success: '#2ecc71', // Light green for success
    danger: '#e74c3c', // Consistent red for error
    warning: '#f39c12', // Yellow for warning
    info: '#3498db', // Blue for info
    border: '#444444', // Dark border for dark mode
    textContrast: '#000000', // Dark contrast for readability
  },
  shadows: {
    light: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.5)',
    medium: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.6)',
    heavy: '0 0.375rem 0.75rem rgba(0, 0, 0, 0.7)',
  },
};
