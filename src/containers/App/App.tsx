import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { CreateImage } from '../Image/Create';
import { ImageList } from '../Image/List';
import { ShowImage } from '../Image/Show';
import { Update } from '../Image/Update';
import { DashboardLayout } from '../../components/layouts/components/DashboardLayout';

export function App() {
  return (
    <Router>
      <DashboardLayout>
        <Switch>
          <Route exact path="/images">
            <ImageList />
          </Route>
          <Route exact path="/images/create">
            <CreateImage />
          </Route>
          <Route exact path="/images/:id">
            <ShowImage />
          </Route>
          <Route exact path="/images/:id/update">
            <Update />
          </Route>
          <Redirect exact from="/" to="/images" />
        </Switch>
      </DashboardLayout>
    </Router>
  );
}