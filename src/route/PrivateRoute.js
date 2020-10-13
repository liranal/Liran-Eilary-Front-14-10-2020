import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ isSignedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" push={true} />
        );
      }}
    />
  );
};

export default PrivateRoute;
