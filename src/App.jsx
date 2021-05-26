import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {

  const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuth = useSelector( state => state.userLogin );
    return (
        <Route { ...rest } render={ props => (
            isAuth 
            ? <Component { ...props } />
            : <Redirect to="/login" />
          )} 
        />
    );
  };

  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <BrowserRouter>
          <GlobalStyle />
          <Switch>
            <Route exact path = '/login' component = { Login } />
            <PrivateRoute exact path = '/' component = { Home } />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
