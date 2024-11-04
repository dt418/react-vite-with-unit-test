import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

/**
 * Custom hook to manage the color mode of the application.
 *
 * @returns {[string, React.Dispatch<React.SetStateAction<string>>]}
 *          An array containing the current color mode and a function to update it.
 */
const useColorMode = () => {
  // Use the useLocalStorage hook to manage the color mode in local storage.
  // The first argument is the key for the local storage item, and the second
  // argument is the initial value.
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

  // UseEffect hook to update the body class when the color mode changes.
  // The effect runs only when the color mode changes.
  useEffect(() => {
    // Define the class name to be added or removed from the body.
    const className = 'dark';

    // Get a reference to the body element's classList.
    const bodyClass = window.document.body.classList;

    // If the color mode is 'dark', add the class name to the body classList.
    // Otherwise, remove the class name from the body classList.
    return colorMode === 'dark'
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  // Return an array containing the current color mode and a function to update it.
  return [colorMode, setColorMode];
};
export default useColorMode;
