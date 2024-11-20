import { type ReactNode, memo, useState } from 'react';

type SidebarLinkGroupProps = {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activeCondition: boolean;
};

const SidebarLinkGroup: React.FC<SidebarLinkGroupProps> = ({
  children,
  activeCondition,
}) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};
export default memo(
  SidebarLinkGroup,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.activeCondition === nextProps.activeCondition,
);
