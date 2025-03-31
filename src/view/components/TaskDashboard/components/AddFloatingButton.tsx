import { MdAdd } from 'react-icons/md';
import styled from '@emotion/styled';
import chroma from 'chroma-js';

const FloatingButton = styled('button')(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: theme.colors.primary,
  color: '#FFF',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme.shadows.light,
  cursor: 'pointer',
  transition: theme.transitions.short,

  '&:hover': {
    backgroundColor: chroma(theme.colors.primary).luminance(0.3).hex(),
    transform: 'scale(1.1)',
    boxShadow: '0 4px 15px rgba(128, 0, 128, 0.4)',
  },
}));

interface AddFloatingButtonProps {
  onClick: () => void;
}

export default function AddFloatingButton({ onClick }: AddFloatingButtonProps) {
  return (
    <FloatingButton onClick={onClick}>
      <MdAdd fontSize={24} />
    </FloatingButton>
  );
}
