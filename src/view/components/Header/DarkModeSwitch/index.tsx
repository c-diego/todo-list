import { css } from '@emotion/react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useState } from 'react';
import { useMyTheme } from '@/view/context/ThemeContext';
import ActionButton from '../../shared/ActionButton';

/** Animation style */
const fadeInAnimationStyle = css({
  opacity: 0,
  animation: 'fadeIn 2s forwards',

  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
});

/** Hook to toggle the theme */
export default function DarkModeSwitch() {
  // Iimport the function to toggle the theme
  const { toggleTheme, isDarkMode } = useMyTheme();

  // State to control the animation
  const [hasToggled, setHasToggled] = useState(false);

  /** Function to handle the theme toggle */
  const handleToggleTheme = () => {
    setHasToggled(true);
    toggleTheme();
  };

  return (
    <ActionButton onClick={handleToggleTheme}>
      {isDarkMode ? (
        <MdOutlineLightMode css={hasToggled ? fadeInAnimationStyle : {}} />
      ) : (
        <MdOutlineDarkMode css={hasToggled ? fadeInAnimationStyle : {}} />
      )}
    </ActionButton>
  );
}
