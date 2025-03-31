import { Theme } from '@emotion/react';
import { useState, useEffect, useCallback } from 'react';
import { useMyTheme } from '@/view/context/ThemeContext';

type Breakpoint = keyof Theme['breakpoints'];

/** Hook para obter o breakpoint atual */
export default function useBreakpoint() {
  // Tema da aplicação para acessar o tema
  const { theme } = useMyTheme();

  /** Função para obter o breakpoint atual */
  const getCurrentBreakpoint = useCallback((): Breakpoint => {
    if (window.innerWidth <= convertPxToNumber(theme.breakpoints.xs)) {
      return 'xs';
    }

    if (window.innerWidth <= convertPxToNumber(theme.breakpoints.sm)) {
      return 'sm';
    }

    if (window.innerWidth <= convertPxToNumber(theme.breakpoints.md)) {
      return 'md';
    }

    if (window.innerWidth <= convertPxToNumber(theme.breakpoints.lg)) {
      return 'lg';
    }

    if (window.innerWidth <= convertPxToNumber(theme.breakpoints.xl)) {
      return 'xl';
    }

    return 'xl';
  }, [theme.breakpoints]);

  // Estado para armazenar o breakpoint atual
  const [breakpoint, setBreakpoint] =
    useState<Breakpoint>(getCurrentBreakpoint);

  useEffect(() => {
    const handleResize = () => {
      const breakpoint = getCurrentBreakpoint();
      setBreakpoint(breakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}

const convertPxToNumber = (px: string) => parseInt(px.replace('px', ''), 10);
