import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>

          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
