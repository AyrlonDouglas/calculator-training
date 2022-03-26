import React from "react"
import { Link } from "react-router-dom"
import Grid, { GridProps } from "@mui/material/Grid"

export default function Nav() {
	return (
		<Grid container>
			<Link to={"/"}>
				<button>Início</button>
			</Link>
			<Link to={"/calculator"}>
				<button>Calculadora simples</button>
			</Link>
		</Grid>
	)
}
