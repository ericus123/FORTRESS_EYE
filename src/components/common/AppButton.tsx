import { Button, SxProps } from "@mui/material";

const AppButton = ({
  text,
  onClick,
  sx,
  type
}: {
  text: string;
  onClick?: () => void;
  sx?: SxProps;
  type?: "button" | "submit";
}) => {
  return (
    <Button
      onClick={onClick}
      type={type || "button"}
      sx={{
        "&:hover": {
          background: "none"
        },
        ...sx
      }}>
      {text}
    </Button>
  );
};

export default AppButton;
