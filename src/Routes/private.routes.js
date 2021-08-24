import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "./Routes";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => {

        return (auth?.loginAuth) ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: `/${Routes.wallet}`, state: props.location }} />
          );
      }}
    />
  );
};

export default PrivateRoute;
