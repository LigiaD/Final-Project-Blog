import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';


import reducers from './reducers';
import history from './history';



import Home from './components/home';
import NewPost from './components/newpost';



const createStoreWithMiddleware = applyMiddleware(createStore);


import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';



function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          
            <Route path="/" exact component={Home}/>
            <Route path="/newpost" component={NewPost}/>
        
          
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.home'));
}

document.addEventListener('DOMContentLoaded', main);
