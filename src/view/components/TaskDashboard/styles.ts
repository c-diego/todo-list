import styled from '@emotion/styled';
import Box from '@/view/components/shared/Box';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: `${theme.spacing.large} auto`,
  flexGrow: 1,
  padding: theme.spacing.large,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: 10,
  boxShadow: theme.shadows.light,
  backgroundColor: theme.colors.background,
  transition: theme.transitions.short,
  width: '80%',
}));
