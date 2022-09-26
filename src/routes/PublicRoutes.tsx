import { Route, Switch } from 'react-router-dom';
import AuthRoutes from '../views/Auth';
import { NotFound } from '../views';
import { PublicLayout } from './Layout';
import LoginEmailView from '../views/Auth/Login/Email';

/**
 * List of routes available only for anonymous users
 * Also renders the "Public Layout" composition
 */
const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Switch>
        <Route path="/" exact component={LoginEmailView} />
      </Switch>
    </PublicLayout>
  );
};

export default PublicRoutes;
