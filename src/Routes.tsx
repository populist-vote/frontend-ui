import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {
  NewsfeedPage,
  Homepage,
  FederalIssues,
  StateIssues,
  LocalIssues,
} from 'components';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/newsfeed" exact>
          <Link to="/" style={{ color: 'white' }}>
            Go Home
          </Link>
          <NewsfeedPage />
        </Route>

        <Route path="/FederalIssues" exact>
          <FederalIssues />
        </Route>

        <Route path="/StateIssues" exact>
          <StateIssues />
        </Route>

        <Route path="/localIssues" exact>
          <LocalIssues />
        </Route>

        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
