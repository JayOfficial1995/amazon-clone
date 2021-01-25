import { ThemeProvider } from "styled-components";

import Header from "./component/Header/Header";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobatStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
