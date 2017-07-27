import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';




import App from './component/App';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/BaseLayout';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App>
     <Switch>
      <Route exact path='./' component={BaseLayout}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/about' component={About}/>
    </Switch>
   <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
