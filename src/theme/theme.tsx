import { createTheme } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
  }
  interface PaletteOptions {
    white?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#1a759f" },
    secondary: { main: "#99d98c" },
    error: { main: "#e07a5f" },
    warning: { main: "#ffd60a" },
    background: {
      default: "#F5F5F5",
      paper: "#e1e1e1",
    },
  },

  components: {},
  typography: {
    htmlFontSize: 10,
  },
  spacing: 4,
});
