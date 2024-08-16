import React, { SVGProps } from 'react';

import { useDynamicSVGImport } from '@/hooks/useDynamicSVGImport';
import { IconName } from '@/types/utils/iconName';

export type SvgIconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  icon: IconName;
  testId?: string;
  size?: string | number;
};

/**
 * The SvgIcon component renders an SVG element with the specified icon and props.
 * The icon is imported dynamically using the useDynamicSVGImport hook.
 *
 *  @example
 * <SvgIcon icon="home" />
 * <SvgIcon icon="accessibility" size="2em" className="text-primary-500" />
 *
 * @param {IconName} icon - The name of the icon to be displayed
 * @param {string} [viewBox='0 0 15 15'] - The viewBox attribute for the SVG element
 * @param {string|number} [size='1em'] - The width and height for the SVG element
 * @param {string} [testId='svgIcon'] - The testId attribute for the SVG element
 * @param {object} [props] - Additional props to be passed to the SVG element
 */
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
      // The data-testid attribute is used by the testing library
      data-testid={testId}
      // The viewBox attribute sets the coordinate system for the SVG element
      viewBox={viewBox}
      // The width and height attributes set the size of the SVG element
      width={size}
      height={size}
      // Additional props are passed to the SVG element
      {...props}
    />
  ) : null;
};

export default SvgIcon;
