import { ThemeProvider } from "styled-components";
import theme from "src/themes";
import Button from "src/components/atoms/Button";

function App() {
  return <ThemeProvider theme={theme}>
    <Button>Text</Button>
  </ThemeProvider>;
}

export default App;
