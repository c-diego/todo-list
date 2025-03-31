import styled from '@emotion/styled';
import chroma from 'chroma-js';

export const StyledCheckbox = styled('input')(({ theme }) => ({
  width: '20px',
  height: '20px',
  border: `1px solid ${theme.colors.border}`,
  backgroundColor: theme.colors.background,
  borderRadius: '4px',
  appearance: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.1s ease, border-color 0.1s ease',

  '&:checked': {
    backgroundColor: chroma(theme.colors.primary).luminance(0.2).css(),
    borderColor: theme.colors.primary,
  },

  '&:checked::after': {
    content: '"\\2713"', // Unicode for a checkmark
    display: 'block',
    color: theme.colors.background,
    fontSize: theme.typography.fontSize.small,
    textAlign: 'center',
    lineHeight: '20px',
  },
}));
