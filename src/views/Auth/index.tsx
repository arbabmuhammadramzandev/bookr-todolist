import { Route, Switch } from 'react-router-dom';
import AuthView from './Auth';
import SignupRoutes from './Signup';
import LoginRoutes from './Login';

/**
 * Routes for "Auth" flow
 * url: /auth/*
 */
const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/signup" component={SignupRoutes} />
      <Route path="/auth/login" component={LoginRoutes} />
      <Route component={AuthView} />
    </Switch>
  );
};

export default AuthRoutes;
