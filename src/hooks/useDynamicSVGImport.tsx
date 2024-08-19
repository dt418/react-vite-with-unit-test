import React, { SVGProps, useEffect, useState } from 'react';

/**
 * Custom hook to dynamically import SVG components.
 *
 * @param name - The name of the SVG file to import.
 * @returns The imported SVG component or null if the import fails.
 */
export const useDynamicSVGImport = (
  name: string,
): React.FC<SVGProps<SVGSVGElement>> | null => {
  // State to hold the imported SVG component
  const [SvgComponent, setSvgComponent] = useState<React.FC<
    SVGProps<SVGSVGElement>
  > | null>(null);

  /**
   * Effect hook to import the SVG component dynamically.
   * The component is imported based on the provided name parameter.
   * The component is stored in the SvgComponent state.
   */
  useEffect(() => {
    // Function to import the SVG component dynamically
    const importSVG = async () => {
      try {
        // Import the SVG file using dynamic import syntax
        const importedSVG = (await import(`../assets/icons/${name}.svg?react`))
          .default;
        // Set the imported SVG component in the state
        setSvgComponent(() => importedSVG);
      } catch (error) {
        // Log any errors encountered during the import
        console.error(`Error importing SVG: ${error}`);
      }
    };

    // Call the importSVG function to import the SVG component
    importSVG();
  }, [name]);

  // Return the imported SVG component or null if not yet imported
  return SvgComponent;
};
