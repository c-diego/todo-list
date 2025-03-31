import styled from '@emotion/styled';
import chroma from 'chroma-js';

export const Overlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
});

export const DialogWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.background,
  borderRadius: theme.borders.borderRadius,
  width: '90%',
  maxWidth: 500,
  position: 'relative',
  boxShadow: theme.shadows.light,
}));

export const CloseButton = styled('button')(({ theme }) => ({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: theme.colors.text,
  fontSize: theme.typography.fontSize.large,
  borderRadius: theme.borders.borderRadius,

  '&:hover': {
    color: chroma(theme.colors.text).alpha(0.8).css(),
  },
}));

export const InputWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xSmall,
  width: '100%',
}));

export const Label = styled('label')(({ theme }) => ({
  fontSize: theme.typography.fontSize.small,
  fontWeight: theme.typography.fontWeight.bold,
  color: theme.colors.text,
  marginBottom: theme.spacing.medium,
}));

interface StyledTextareaProps {
  invalid?: boolean;
}

export const StyledTextarea = styled('textarea')<StyledTextareaProps>(
  ({ theme, invalid }) => ({
    resize: 'none',

    width: '100%',
    minHeight: '100px',
    padding: theme.spacing.small,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borders.borderRadius,
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.medium,
    fontFamily: theme.typography.fontFamily.body,
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',

    '::placeholder': {
      color: chroma(theme.colors.text).alpha(0.5).css(),
    },

    ':focus': {
      borderColor: theme.colors.primary,
      boxShadow: `0 0 5px ${chroma(theme.colors.primary).alpha(0.5)}`,
      outline: 'none',
    },

    ':disabled': {
      backgroundColor: chroma(theme.colors.background).brighten(0.3).css(),
      cursor: 'not-allowed',
      opacity: 0.7,
    },

    ...(invalid && {
      borderColor: theme.colors.danger,
      backgroundColor: chroma(theme.colors.danger).alpha(0.1).css(),

      ':focus': {
        borderColor: theme.colors.danger,
        boxShadow: `0 0 5px ${chroma(theme.colors.danger).alpha(0.5)}`,
      },
    }),
  })
);
