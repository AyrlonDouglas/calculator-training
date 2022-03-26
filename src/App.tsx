import Routes from "./routes"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material"
import { theme } from "./theme/theme"

const App = () => {
	return (
		<CssBaseline>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</CssBaseline>
	)
}
export default App
