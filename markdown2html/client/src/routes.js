import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './ui/App';
import Note from './ui/notes/Note';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Note} />
    </Route>
  </Router>
);
