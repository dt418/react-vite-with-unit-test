import { memo, useEffect } from 'react';

type PageTitleProps = {
  title: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null; // This component doesn't render anything
};

export default memo(PageTitle, (prev, next) => prev.title === next.title);
