import { useMyTheme } from '@/view/context/ThemeContext';
import { Theme } from '@emotion/react';
import { css, Global } from '@emotion/react';
import { useMemo } from 'react';

export default function GlobalStyles() {
  // Get the current theme from the ThemeContext
  const { theme } = useMyTheme();

  /** Estilo global da aplicação */
  const styles = useMemo(() => generateCss(theme), [theme]);

  return <Global styles={styles} />;
}

const generateCss = (theme: Theme) =>
  css({
    /* 1. Use a more-intuitive box-sizing model */
    '*': {
      boxSizing: 'border-box',
      margin: 0,
    },
    '*::before': {
      boxSizing: 'border-box',
    },
    '*::after': {
      boxSizing: 'border-box',
    },
    '*:focus, *:focus-visible': {
      outline: `2px solid ${theme.colors.primary}`,
      outlineOffset: '2px',
    },
    body: {
      lineHeight: theme.typography.lineHeight,
      WebkitFontSmoothing: 'antialiased',
      fontFamily: theme.typography.fontFamily.body,
      fontSize: theme.typography.fontSize.medium,
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: theme.typography.fontFamily.heading,
      fontWeight: theme.typography.fontWeight.bold,
      fontSize: theme.typography.fontSize.large,
      color: theme.colors.text,
      marginBottom: theme.spacing.medium,
    },
    p: {
      overflowWrap: 'break-word',
      textWrap: 'pretty',
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.medium,
      fontFamily: theme.typography.fontFamily.body,
      marginBottom: theme.spacing.medium,
    },
    'img, picture, video, canvas, svg': {
      display: 'block',
      maxWidth: '100%',
    },
    'input, button, textarea, select': {
      font: 'inherit',
    },
    '#root, #__next': {
      isolation: 'isolate',
    },
  });
