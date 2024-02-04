import { Popover } from "@mui/material";
import { ReactNode } from "react";

const AppPopover = ({
  children,
  anchorEl,
  handleClose
}: {
  children: ReactNode;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}>
      {children}
    </Popover>
  );
};
export default AppPopover;
