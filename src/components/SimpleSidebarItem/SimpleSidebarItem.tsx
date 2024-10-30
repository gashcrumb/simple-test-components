import React, { useCallback, useState } from "react";
import { SidebarItem } from "@backstage/core-components";
import { SimpleDialog } from "../../plugin";
import { SportsBar } from "@mui/icons-material";

export type SimpleSidebarItemProps = {
  to: string;
  text?: string;
};

export const SimpleSidebarItem = ({ text, to }: SimpleSidebarItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [isOpen, setIsOpen]);
  return (
    <SidebarItem
      to={to}
      onClick={() => setIsOpen(!isOpen)}
      text={text}
      icon={SportsBar}
    >
      <SimpleDialog open={isOpen} onClose={handleClose} />
    </SidebarItem>
  );
};
