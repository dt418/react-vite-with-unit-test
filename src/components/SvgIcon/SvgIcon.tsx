import React, { SVGProps } from 'react';

import { useDynamicSVGImport } from '@/hooks/useDynamicSVGImport';
import { IconName } from '@/types/utils/iconName';

export type SvgIconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  icon: IconName;
  testId?: string;
  size?: string | number;
};

const SvgIcon: React.FC<SvgIconProps> = ({
  icon,
  viewBox = '0 0 15 15',
  size = '1em',
  testId = 'svgIcon',
  ...props
}) => {
  const Icon = useDynamicSVGImport(icon);
  return Icon ? (
    <Icon
      data-testid={testId}
      viewBox={viewBox}
      width={size}
      height={size}
      {...props}
    />
  ) : null;
};

export default SvgIcon;
