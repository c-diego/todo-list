import { useCallback, useState } from 'react';

/** Hook to toggle a state */
export default function useToggle() {
  // State to control the toggle
  const [isOpen, setIsOpen] = useState(false);

  /** Function to toggle the state */
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  /** Function to close the state */
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  /** Function to open the state */
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    toggle,
    handleClose,
    handleOpen,
  };
}
