import { Route, Switch } from 'react-router-dom';
import { TodoList, NotFound } from '../views';
import { PrivateLayout } from './Layout';

/**
 * List of routes available only for authenticated users
 * Also renders the "Private Layout" composition
 */
const PrivateRoutes = () => {
  return (
    <PrivateLayout>
      <Switch>
        <Route path="/" exact component={TodoList} />
      </Switch>
    </PrivateLayout>
  );
};

export default PrivateRoutes;
