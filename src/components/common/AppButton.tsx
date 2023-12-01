import { Button, SxProps } from "@mui/material";

const AppButton = ({
  text,
  onClick,
  sx
}: {
  text: string;
  onClick?: () => void;
  sx?: SxProps;
}) => {
  return (
    <Button
      onClick={onClick}
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
