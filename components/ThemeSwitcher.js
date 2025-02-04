import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const ThemeSwitcher = () => {
  const { state, dispatch } = useTheme();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <button onClick={toggleTheme} className="ml-4 p-2">
      {state.theme === 'light' ? <MdOutlineDarkMode className="text-2xl text-gray-900 dark:text-white" /> : <MdOutlineLightMode className="text-2xl text-gray-900 dark:text-white" />}
    </button>
  );
};

export default ThemeSwitcher;

