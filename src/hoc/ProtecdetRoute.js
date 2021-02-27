import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  return <Route path={props.path}>{() => (props.isloggedIn ? <>{props.children}</> : <Redirect to='/' />)}</Route>;
};
export default ProtectedRoute;
