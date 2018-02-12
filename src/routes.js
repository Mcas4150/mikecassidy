import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/index';
import Main from './components/Main/index';
import Skills from './components/Skills/index';
import Contact from './components/Contact/index';
import Projects from './components/Projects/index';
// import ItemPage from './components/ItemPage/index';
// import MyItems from './components/MyItems/index';
// import ErrorPage from './components/ErrorPage/index';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="skills" component={Skills} />
    <Route path="contact" component={Contact} />
    <Route path="projects" component={Projects} />
{/*    <Route path="myItems" component={MyItems} />
    <Route path="*" component={ErrorPage} />*/}
  </Route>
);
