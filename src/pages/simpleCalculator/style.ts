import Box from "@mui/material/Box"
import styled from "@mui/material/styles/styled"
import Grid from "@mui/material/Grid"

export const BoxValue = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	height: 70px;
	font-size: 1.5rem;

	.history-operation {
		color: gray;
		font-size: 1rem;
	}
`
export const BoxKeyboard = styled(Box)`
	height: 500px;
	background-color: grey;
`
