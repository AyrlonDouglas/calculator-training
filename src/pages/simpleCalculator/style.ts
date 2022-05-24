import Box, { BoxProps } from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import Grid, { GridProps } from "@mui/material/Grid";

interface GridValueProps extends GridProps {
  history?: boolean;
}

export const BoxValue = styled(Box)<GridValueProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-end",
  minHeight: "7rem",
  fontSize: "1.5rem",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),

  ".history-operation": {
    color: "gray",
    fontSize: "1rem",
  },
}));
export const GridValue = styled(Grid)<GridValueProps>(({ theme }) => ({
  wordWrap: "break-word",
  width: "100%",
  textAlign: "right",
}));
export const BoxKeyboard = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",

  padding: "0.8rem 0",
}));
