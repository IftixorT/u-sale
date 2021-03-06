import { FC } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { routes, IRoute } from './config';
import RouteWithSubRoutes from './route-with-sub-routes';
import policy from '../pages/policy/policy'

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route: IRoute) => (
          <RouteWithSubRoutes key={route.path || route.redirect} {...route} />
        ))}
       
      </Switch>
    </Router>
  );
};

export default Routes;
