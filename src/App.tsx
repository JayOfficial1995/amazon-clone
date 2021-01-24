import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobatStyle";
import theme from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />

    <div>
      jahangir khan
    </div>
    </ThemeProvider>
  );
}

export default App;
