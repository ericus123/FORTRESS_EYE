import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/";
import "@fontsource/source-sans-pro/300.css";
import { createTheme } from "@mui/material/styles";
import { colors } from "../../constants/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {}
  },
  typography: {
    button: {
      textTransform: "none"
    },
    fontFamily: "Source Sans Pro, Roboto, Arial, sans-serif"
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: colors.light
          })
        })
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
          }
        }
      }
    }
  }
});

export default theme;
