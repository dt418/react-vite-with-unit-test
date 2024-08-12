import { VectorMap } from '@react-jvectormap/core';
import { IVectorMapProps } from '@react-jvectormap/core/dist/types';
import React, { HTMLAttributes, memo } from 'react';

export type WorldMapProps = HTMLAttributes<HTMLDivElement> &
  IVectorMapProps & {
    // define your props here
  };

const WorldMap: React.FC<WorldMapProps> = ({
  map,
  backgroundColor,
  regionStyle,
  ...rest
}) => {
  return (
    <div data-testid="worldMap" className="max-w-full aspect-auto h-[500px]">
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
    prevProps.map === nextProps.map &&
    prevProps.backgroundColor === nextProps.backgroundColor &&
    prevProps.regionStyle === prevProps.regionStyle,
);
