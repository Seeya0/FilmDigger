import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav/MainNav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch></Switch>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
