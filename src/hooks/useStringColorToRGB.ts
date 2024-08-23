import { useEffect, useState } from 'react';

/**
 * Returns the RGB representation of a given color string.
 *
 * @param color The color string to convert to RGB. Can be a named color, a hex color, or an RGB color.
 * @returns The RGB representation of the given color, or null if the color is invalid.
 */
const useStringColorToRGB = (color: string): string | null => {
  const [rgbColor, setRgbColor] = useState<string | null>(null);

  useEffect(() => {
    // Create a temporary canvas element to compute the RGB color of the given color string
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (context) {
      // Apply the color to the canvas context
      context.fillStyle = color;

      // Retrieve the color in RGB format
      const computedColor = context.fillStyle as string;

      // Set the RGB color state
      setRgbColor(computedColor);
    }
  }, [color]); // Re-run the effect when the color changes

  return rgbColor;
};
export default useStringColorToRGB;
