import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import Nav from 'Nav';
import Weather from './components/weather';
import About from './components/about';
import Examples from './components/examples';

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
// app css
require('style!css!applicationStyles');
ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Weather}/>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
      </Route>
  </Router>,
  document.getElementById('app')
);
