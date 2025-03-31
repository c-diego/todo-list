import styled from '@emotion/styled';

export const Heartbeat = styled('span')({
  display: 'inline-block',
  animation: 'heartbeat 1.5s infinite',

  '@keyframes heartbeat': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
});
