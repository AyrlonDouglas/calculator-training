import React from "react"
// components
import Nav from "../../components/Nav"
// MUI
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"

// style
import { BoxValue, BoxKeyboard } from "./style"
// components
import KeyboardButton from "../../components/Button/Keyboard"

export default function simplesCalculator(props: any) {
	const keyboardNumbers = [
		".",
		"0",
		"1",
		"2",
		"3",
		"4",
		"5 ",
		"6",
		"7",
		"8",
		"9",
	].reverse()

	function generateKeyboard(arr: string[]) {
		return arr.map((key) => (
			<Grid item xs={4} sm={4}>
				<KeyboardButton keyboardNumber={key} />
			</Grid>
		))
	}

	return (
		<>
			<Nav />
			<Container sx={{ marginTop: "20px" }}>
				<Paper>
					<BoxValue>
						<Grid>4,152</Grid>
						<Grid className="history-operation">3,250 + 740 + 482 - 318</Grid>
					</BoxValue>
					<Grid container spacing={1}>
						{generateKeyboard(keyboardNumbers)}
					</Grid>
				</Paper>
			</Container>
		</>
	)
}
