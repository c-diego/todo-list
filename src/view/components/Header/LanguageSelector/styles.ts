import styled from '@emotion/styled';
import chroma from 'chroma-js';

export const Dropdown = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  top: '100%',
  left: 0,
  background: theme.colors.background,
  boxShadow: theme.shadows.medium,
  zIndex: 10,
  minWidth: '120px',
  borderRadius: theme.borders.borderRadius,
  marginTop: theme.spacing.medium,
}));

export const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderRadius: theme.borders.borderRadius,
  backgroundColor: theme.colors.background,
}));

interface ItemProps {
  selected?: boolean;
}

export const Item = styled('div')<ItemProps>(({ theme, selected }) => ({
  padding: `${theme.spacing.small} ${theme.spacing.medium}`,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '&:last-child': {
    borderBottomRightRadius: theme.borders.borderRadius,
    borderBottomLeftRadius: theme.borders.borderRadius,
  },

  '&:first-of-type': {
    borderTopRightRadius: theme.borders.borderRadius,
    borderTopLeftRadius: theme.borders.borderRadius,
  },

  ...(selected && {
    background: chroma(theme.colors.primary).luminance(0.6).css(),
  }),

  '&:hover': {
    background: chroma(theme.colors.primary).luminance(0.8).css(),
  },
}));
