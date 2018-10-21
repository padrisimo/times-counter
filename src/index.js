import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Styles/index.scss';
import App from './components/App';
import { Whoops404 } from './components/Whoops404';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/list-days" component={App} />
      <Route exact path="/add-day" component={App} />
      <Route component={Whoops404} />
    </Switch>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
