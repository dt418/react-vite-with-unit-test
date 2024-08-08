import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import React, { HTMLAttributes } from 'react';

export type WorldMapProps = HTMLAttributes<HTMLDivElement> & {
  // define your props here
};

const WorldMap: React.FC<WorldMapProps> = (props) => {
  return (
    <div data-testid="worldMap" {...props} className="w-full h-[500px]">
      <VectorMap
        map={worldMill}
        backgroundColor="transparent"
        regionStyle={{
          initial: {
            fill: '#A9BDFF',
          },
          hover: {
            fill: '#3056d3',
          },
          selected: {
            fill: '#2d3436',
          },
        }}
      />
    </div>
  );
};

export default WorldMap;
