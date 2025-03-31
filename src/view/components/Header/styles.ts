import Box from '@/view/components/shared/Box';
import styled from '@emotion/styled';

export const Container = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing.small,
  padding: theme.spacing.medium,
  borderBottom: `0.2px solid ${theme.colors.border}`,
  backgroundColor: theme.colors.background,
  color: theme.colors.text,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing.small,
  transition: theme.transitions.short,
  boxShadow: theme.shadows.light,

  [`@media (max-width: ${theme.breakpoints.sm})`]: {
    flexDirection: 'column',
    alignItems: 'start',
  },
}));

export const Title = styled('h1')(({ theme }) => ({
  color: theme.colors.text,
  fontSize: theme.typography.fontSize.large,
  fontFamily: theme.typography.fontFamily.heading,
  fontWeight: theme.typography.fontWeight.bold,
  marginBottom: '0px',
  transition: theme.transitions.short,

  [`@media (max-width: ${theme.breakpoints.sm})`]: {
    textAlign: 'start',
  },
}));

export const SecondaryTitle = styled('p')(({ theme }) => ({
  color: theme.colors.text,
  fontSize: theme.typography.fontSize.small,
  marginBottom: '0px',
  transition: theme.transitions.short,

  [`@media (max-width: ${theme.breakpoints.sm})`]: {
    textAlign: 'start',
  },
}));

export const RoundedLogo = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  objectFit: 'cover',
  marginRight: theme.spacing.small,

  [`@media (max-width: ${theme.breakpoints.sm})`]: {
    width: '30px',
    height: '30px',
    marginBottom: theme.spacing.small,
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.small,

  [`@media (max-width: ${theme.breakpoints.sm})`]: {
    justifyContent: 'center',
  },
}));
