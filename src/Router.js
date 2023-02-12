import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import './styles.css';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/character/:id'>
          <Details />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
