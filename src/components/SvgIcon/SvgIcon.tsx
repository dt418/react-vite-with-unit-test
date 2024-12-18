import type React from 'react';
import type { SVGProps } from 'react';

import { useDynamicSVGImport } from '@/hooks/useDynamicSVGImport';
import type { IconName } from '@/types/utils/iconName';

/**
 * `SvgIconProps` defines the props for the `SvgIcon` component.
 *
 * @property {IconName} icon - The name of the SVG icon to render. The icon should be a separate SVG file
 *                             in the `assets/icons` directory.
 * @property {string} [testId] - The test ID to use for the SVG element. Defaults to `'svgIcon'`.
 * @property {string | number} [size] - The size of the SVG element. Can be a string or a number. Defaults to `'1em'`.
 * @property {SVGProps<SVGSVGElement>} [...props] - Additional props to be spread onto the SVG element.
 *                                                  Excludes `width` and `height` props.
 */
export type SvgIconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  icon: IconName;
  testId?: string;
  size?: string | number;
};

/**
 * Renders an SVG icon based on the provided `icon` prop.
 * The SVG component is imported dynamically using the `useDynamicSVGImport` hook.
 *
 * @param icon - The name of the SVG icon to render. The icon should be a separate SVG file
 *               in the `assets/icons` directory.
 * @param [viewBox] - The viewBox string to use for the SVG element. Defaults to `'0 0 15 15'`.
 * @param [size] - The size of the SVG element. Can be a string or a number. Defaults to `'1em'`.
 * @param [testId] - The test ID to use for the SVG element. Defaults to `'svgIcon'`.
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
