import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./component/Header/Header";
import theme from "./style/theme";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import GlobalStyle from "./style/GlobatStyle";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
