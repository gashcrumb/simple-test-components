import React, { useCallback, useState } from "react";
import { SidebarItem } from "@backstage/core-components";
import { SimpleDialog } from "../../plugin";
import { IconComponent } from "@backstage/core-plugin-api";
import { SportsBar } from "@mui/icons-material";

export type SimpleSidebarItemProps = {
  icon?: IconComponent;
  text?: string;
};

export const SimpleSidebarItem = ({ text }: SimpleSidebarItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [isOpen, setIsOpen]);
  return (
    <SidebarItem
      onClick={() => setIsOpen(!isOpen)}
      text={text}
      icon={SportsBar}
    >
      <SimpleDialog open={isOpen} onClose={handleClose} />
    </SidebarItem>
  );
};
