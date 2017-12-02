import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';


let store = createStore((state = [{ name: 'jahil' }], action) => state);

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/:category' component={() => <h1>About</h1>}/>
        <Route path='/:category/:id' component={() => <h1>Contact</h1>}/>
        <Route path='/update' component={() => <h1>News</h1>}/>
        <Route path='*' component={() => <h1>404</h1>}/>
      </Switch>
    </Router>
  </Provider>
);


export default Routes;
