import { useEffect, useRef } from 'react';

interface useDropdownClickAway {
  onClose: (isOpen: boolean) => void;
}

/** Hook to close the dropdown when clicking outside the container */
export default function useDropdownClickAway({
  onClose,
}: useDropdownClickAway) {
  // Ref to the dropdown container
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside the container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        onClose(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, containerRef]);

  return {
    containerRef,
  };
}
