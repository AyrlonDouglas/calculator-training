import { styled } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Button, { ButtonProps } from "@mui/material/Button"

export const ButtonStyle = styled(Button)<ButtonProps>(({ theme }) => ({
	background: theme.palette.primary.main,
}))
