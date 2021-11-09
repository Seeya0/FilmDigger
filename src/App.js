import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav/MainNav";
import Trending from "./pages/Trending/Trending";
import Films from "./pages/Films/Films";
import Series from "./pages/Series/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route path="/films" component={Films} />
            <Route path="/series" component={Series} />
          </Switch>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
