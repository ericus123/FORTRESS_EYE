import { images } from "@/constants/images";
import { Button, SxProps } from "@mui/material";
import Image from "next/image";

import { ReactNode } from "react";

export interface AuthButtonProps {
  title: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  customClass?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  sx?: SxProps;
  endIcon?: ReactNode;
  hasIcon?: boolean;
  type?: "button" | "reset" | "submit";
}

const AppButton = ({
  title,
  variant = "contained",
  customClass,
  onClick,
  isLoading,
  disabled,
  sx,
  type
}: AuthButtonProps) => {
  return (
    <Button
      variant={variant}
      sx={sx}
      type={type || "submit"}
      onClick={onClick}
      startIcon={
        isLoading && (
          <Image src={images.dotsLoader} width={15} height={15} alt="" />
        )
      }
      disabled={disabled}>
      {title}
    </Button>
  );
};

export default AppButton;
