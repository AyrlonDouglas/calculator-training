import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

export const ButtonStyle = styled(Button)<ButtonProps>(({ theme }) => ({
  background: "none",
  color: theme.palette.text.primary,
  boxShadow: "none",
  borderRadius: "3rem",
  minWidth: "0",
  width: "3rem",
  height: "3rem",
  padding: 0,
  fontWeight: "lighter",
  "&:hover": {
    background: "none",
    boxShadow: "0rem 0rem 0rem 0.05rem  rgba(0,0,0,0.1)",
  },
  "&:focus": { boxShadow: "0rem 0rem 0rem 0.05rem  rgba(0,0,0,0.5)" },
}));
