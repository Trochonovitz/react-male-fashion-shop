import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

const App = () => (
  <Router>
    <Switch>
      <Route to="/" component={HomePage} />
    </Switch>
  </Router>
);

export default App;
