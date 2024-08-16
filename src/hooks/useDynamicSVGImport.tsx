import React, { SVGProps, useEffect, useState } from 'react';

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
