export function colorStringToRGB(color: string) {
  // Create a canvas element and get its 2D context
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    return null; // Return null if context is not available
  }

  // Apply the color to the canvas context
  context.fillStyle = color;

  // Retrieve and return the color in RGB format
  return context.fillStyle;
}
