import Box, { BoxProps } from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import Grid from "@mui/material/Grid";

export const BoxValue = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-end",
  height: "7rem",
  fontSize: "1.5rem",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),

  ".history-operation": {
    color: "gray",
    fontSize: "1rem",
  },
}));

export const BoxKeyboard = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",

  padding: "0.8rem 0",
}));
