import { VectorMap } from '@react-jvectormap/core';
import type { IVectorMapProps } from '@react-jvectormap/core/dist/types';
import type React from 'react';
import { type HTMLAttributes, memo } from 'react';

export type WorldMapProps = HTMLAttributes<HTMLDivElement> &
  IVectorMapProps & {
    // define your props here
  };

/**
 * A React functional component that renders a world map with customizable styles.
 *
 * @param {object} map - The map data to be rendered.
 * @param {string} backgroundColor - The background color of the map.
 * @param {object} regionStyle - The styles for the regions on the map.
 * @param {object} rest - Additional props to be passed to the VectorMap component.
 * @return {JSX.Element} The rendered world map component.
 */
const WorldMap: React.FC<WorldMapProps> = ({
  map,
  backgroundColor,
  regionStyle,
  ...rest
}) => {
  return (
    <div
      data-testid='worldMap'
      className='flex aspect-video h-[300px] max-h-full w-full place-items-center object-cover'
    >
      <VectorMap
        map={map}
        backgroundColor={backgroundColor}
        regionStyle={regionStyle}
        {...rest}
      />
    </div>
  );
};

export const WorldMapStorybook = WorldMap;

export default memo(
  WorldMap,
  (prevProps, nextProps) =>
    JSON.stringify(prevProps) === JSON.stringify(nextProps),
);
