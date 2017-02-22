import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'app/AppContainer';
import Dashboard from 'modules/dashboard/DashboardContainer';
import Inventory from 'modules/inventory/InventoryContainer'
import KitList from 'modules/inventory/KitListContainer'
import KitShow from 'modules/inventory/KitShow'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="" component={Inventory}>
      <Route path="kits/" component={KitList} />
      <Route path="kits/:id" component={KitShow} />
    </Route>
  </Route>
);