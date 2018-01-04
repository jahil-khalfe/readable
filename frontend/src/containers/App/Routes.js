import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import homeReducer from '../Home/reducers';
import AddPost from '../../components/AddPost';
import EditPost from '../../components/EditPost';
import Category from '../../containers/Category';
import Post from '../../containers/Post';


let store = createStore(homeReducer, compose(
  applyMiddleware(thunk),
  (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,));

const Routes = () => (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/post/new' component={AddPost}/>
            <Route exact path='/post/edit/:id' component={EditPost}/>
            <Route exact path='/:category' component={Category}/>
            <Route exact path='/:category/:id' component={Post}/>
          </Switch>
      </Router>
    </Provider>
);


export default Routes;
