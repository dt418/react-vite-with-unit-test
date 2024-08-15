import React, { cloneElement, SVGProps } from 'react';

import { useDynamicSVGImport } from '@/hooks/useDynamicSVGImport';
import { IconName } from '@/types/utils/iconName';

export type SvgIconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  icon: IconName;
  size?: string | number;
};

const SvgIcon: React.FC<SvgIconProps> = ({
  icon,
  viewBox = '0 0 15 15',
  size = '1em',
  ...props
}) => {
  const Icon = useDynamicSVGImport(icon);
  if (!Icon) {
    return null;
  }
  return cloneElement(Icon, {
    viewBox,
    width: size,
    height: size,
    ...props,
  });
};

export default SvgIcon;
