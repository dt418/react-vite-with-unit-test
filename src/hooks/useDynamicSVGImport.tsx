import { useEffect, useState } from 'react';

export function useDynamicSVGImport(src: string) {
  const [icon, setIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        // Use dynamic import with svgr plugin support
        const ImportedIcon = (
          await import(/* @vite-ignore */ `../assets/icons/${src}.svg?react`)
        ).default;
        // Set the icon if it's valid
        if (ImportedIcon) {
          setIcon(ImportedIcon);
        } else {
          throw new Error('SVG import failed');
        }
      } catch (error) {
        console.error('Failed to import SVG:', error);
        setIcon(null);
      }
    };

    importIcon();
  }, [src]);

  return icon;
}
