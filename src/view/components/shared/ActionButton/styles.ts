import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import type { Theme } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import chroma from 'chroma-js';

export type Variant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'default'
  | 'unstyled';

type ButtonType = StyledComponent<
  {
    theme?: Theme;
    as?: React.ElementType;
  },
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  object
>;

const BaseButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.medium,
  justifyContent: 'center',
  flexWrap: 'nowrap',
  backgroundColor: theme.colors.background,
  color: theme.colors.text,
  padding: theme.spacing.medium,
  borderRadius: '10px',
  border: `1px solid ${theme.colors.border}`,
  boxShadow: theme.shadows.light,
  cursor: 'pointer',
  transition: theme.transitions.short,
  fontSize: theme.typography.fontSize.medium,
  fontWeight: theme.typography.fontWeight.medium,

  '&:hover': {
    backgroundColor: chroma(theme.colors.primary).brighten(0.6).css(),
  },
}));

export const styledButtons: Record<Variant, ButtonType> = {
  primary: styled(BaseButton)(({ theme }) => ({
    backgroundColor: theme.colors.primary,
    color: '#FFF',
    border: `1px solid ${theme.colors.primary}`,
    '&:hover': {
      backgroundColor: chroma(theme.colors.primary).brighten(0.6).css(),
    },
  })),
  secondary: styled(BaseButton)(({ theme }) => ({
    backgroundColor: theme.colors.secondary,
    color: '#FFF',
    border: `1px solid ${theme.colors.secondary}`,
    '&:hover': {
      backgroundColor: chroma(theme.colors.secondary).brighten(0.6).css(),
    },
  })),
  danger: styled(BaseButton)(({ theme }) => ({
    backgroundColor: theme.colors.danger,
    color: '#FFF',
    border: `1px solid ${theme.colors.danger}`,
    '&:hover': {
      backgroundColor: chroma(theme.colors.danger).brighten(0.6).css(),
    },
  })),
  warning: styled(BaseButton)(({ theme }) => ({
    backgroundColor: theme.colors.warning,
    color: '#FFF',
    border: `1px solid ${theme.colors.warning}`,
    '&:hover': {
      backgroundColor: chroma(theme.colors.warning).brighten(0.6).css(),
    },
  })),
  success: styled(BaseButton)(({ theme }) => ({
    backgroundColor: theme.colors.success,
    color: '#FFF',
    border: `1px solid ${theme.colors.success}`,
    '&:hover': {
      backgroundColor: chroma(theme.colors.success).brighten(0.6).css(),
    },
  })),
  unstyled: styled('button')(({ theme }) => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    color: theme.colors.text,
  })),
  default: BaseButton,
};

export default BaseButton;
