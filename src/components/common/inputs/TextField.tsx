import styled from "@emotion/styled";
import { TextField, TextFieldProps } from "@mui/material";

const StyledTextField = styled(TextField)(() => ({
  fontFamily: "Roboto",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "1.5",
  padding: "10px 0",
  color: "rgba(252, 221, 236, 1) !important",
  borderWidth: "none"
}));

export const CustomTextField = (props: TextFieldProps) => {
  return (
    <StyledTextField
      id="standard-basic"
      variant="standard"
      {...props}
      InputProps={{ disableUnderline: true }}
    />
  );
};
