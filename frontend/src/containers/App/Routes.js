import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import homeReducer from '../Home/reducers';
import NavBar from '../../components/NavBar';
import Category from '../../containers/Category';
import Post from '../../containers/Post';


let store = createStore(homeReducer, compose(
  applyMiddleware(thunk),
  (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,));

const Routes = () => (
  <div>
    <NavBar/>
    <Provider store={store}>
      <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/:category' component={Category}/>
            <Route exact path='/:category/:id' component={Post}/>
            <Route exact path='/post/new' component={() => <h1>Contact</h1>}/>
            <Route exact path='/post/edit/:id' component={() => <h1>Contact</h1>}/>
            <Route path='*' component={() => <h1>404</h1>}/>
        </Switch>
      </Router>
    </Provider>
  </div>
);


export default Routes;
