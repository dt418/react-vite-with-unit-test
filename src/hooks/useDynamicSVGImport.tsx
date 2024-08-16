import React, { SVGProps, useEffect, useState } from 'react';

/**
 * Dynamically imports an SVG component based on the provided name.
 *
 * @param {string} name - The name of the SVG component to import.
 * @return {React.FC<SVGProps<SVGSVGElement>> | null} The imported SVG component or null if the import fails.
 */
export const useDynamicSVGImport = (name: string) => {
  const [SvgComponent, setSvgComponent] = useState<React.FC<
    SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    const importSVG = async () => {
      try {
        const importedSVG = (await import(`../assets/icons/${name}.svg?react`))
          .default;
        setSvgComponent(() => importedSVG);
      } catch (error) {
        console.error(`Error importing SVG: ${error}`);
      }
    };

    importSVG();
  }, [name]);

  return SvgComponent;
};
