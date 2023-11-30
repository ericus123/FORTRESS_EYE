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
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: colors.light_blue
          })
        })
      }
    }
  }
});

export default theme;
