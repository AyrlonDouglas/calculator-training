import React, { Children } from "react"
import { ButtonStyle as Button } from "./style"
import { Box, BoxProps, createTheme, ThemeProvider } from "@mui/material"
import { alpha, styled } from "@mui/material/styles"
interface IKeyboardButton {
	keyboardNumber?: string
	keyboardOperator?: string
}

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
}))

export default function KeyboardButton(props: IKeyboardButton) {
	const { keyboardNumber, keyboardOperator } = props

	return (
		<>
			<Button variant="contained">{keyboardNumber}</Button>
		</>
	)
}
