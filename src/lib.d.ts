declare module '*.svg' {
  import type * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGElement> & { title?: string }
  >;
  export { ReactComponent };
  const src: string;
  export default src;
}
