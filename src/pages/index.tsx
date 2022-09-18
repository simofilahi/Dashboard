import { ThemeProvider } from "styled-components";
import theme from "src/themes";

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
