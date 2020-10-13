import React from "react";
import { Route, Redirect } from "react-router-dom";
const PublicRoute = ({ isSignedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isSignedIn ? <Redirect to="/Home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
