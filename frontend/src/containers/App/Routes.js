import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import homeReducer from '../Home/reducers';
import NavBar from '../../components/NavBar';
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
        <div>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/:category' component={Category}/>
            <Route path='/:category/:id' component={Post}/>
            <Route exact path='/post/new' component={AddPost}/>
            <Route path='/post/edit/:id' component={EditPost}/>
            <Route path='*' component={() => <h1>404</h1>}/>
          </Switch>
        </div>
      </Router>
    </Provider>
);


export default Routes;
