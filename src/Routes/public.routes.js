import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "./Routes";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (restricted) ? (
            <Redirect exact to={`/${Routes.wallet}`} />
          ) : (
              <Component {...props} />
            )
        
      }}
    />
  );
}


export default PublicRoute;
