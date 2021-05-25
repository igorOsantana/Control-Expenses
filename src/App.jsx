import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path = '/login' component = { Login } />
        <Route exact path = '/' component = { Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
